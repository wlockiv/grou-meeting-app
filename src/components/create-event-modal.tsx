import { GraphQLResult } from '@aws-amplify/api';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import { FormikErrors, useFormik } from 'formik';
import React from 'react';
import { CreateMeetingMutation } from '~/API';
import { createMeeting } from '~/graphql/mutations';

type FormInput = {
  groupId?: string;
  title?: string;
  description?: string;
  date?: string;
};

const mutation = /* GraphQL */ `
  mutation CreateMeeting(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeeting(input: $input, condition: $condition) {
      id
      title
      date
      description
      groupId
    }
  }
`;

type Props = {
  groupId?: string;
  isOpen: boolean;
  onClose(): void;
};

function isIsoDate(str: string): boolean {
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
  const d = new Date(str);
  return d.toISOString() === str;
}

const validate = (values: FormInput) => {
  const errors: FormikErrors<FormInput> = {};
  if (!values.title || values.title === '') {
    errors.title = 'Required';
  } else if (values.title.length < 2) {
    errors.title = 'Must be greater than one character.';
  }

  if (!values.date || values.date == '') {
    errors.date = 'Required';
  } else if (!isIsoDate(values.date)) {
    errors.date = 'Must be a valid UTC ISO date (sorry).';
  }

  if (values.description && values.description.length < 2) {
    errors.description = 'Why even put a description?';
  }

  return errors;
};

const CreateEventModal: React.FC<Props> = ({ groupId, isOpen, onClose }) => {
  async function createEvent(variables: FormInput) {
    try {
      const { errors } = (await API.graphql(
        graphqlOperation(mutation, { input: { ...variables, groupId } }),
      )) as GraphQLResult<CreateMeetingMutation>;

      if (errors) throw new Error(errors.map(e => e.message).join('\n'));
    } catch (error) {
      console.error('There was a problem creating the new meeting:\n', error);
    }
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    resetForm,
    isValid,
    submitForm,
  } = useFormik({
    initialValues: {
      // groupId: groupId || '',
      title: '',
      description: '',
      date: '',
    },
    validate,
    validateOnMount: true,
    onSubmit: createEvent,
  });

  function handleClose(): void {
    resetForm();
    onClose();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitForm();
    resetForm();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="xs">
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Create an Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl
                isRequired
                isInvalid={!!(touched.title && errors.title)}
              >
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.title}</FormErrorMessage>
              </FormControl>
              <FormControl mt={4} isInvalid={!!(touched.date && errors.date)}>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl
                mt={4}
                isInvalid={!!(touched.description && errors.description)}
              >
                <FormLabel htmlFor="description">Description</FormLabel>
                <Input
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.description}</FormErrorMessage>
              </FormControl>
              <Button
                mt={6}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
                isDisabled={!isValid}
              >
                Create
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default CreateEventModal;
