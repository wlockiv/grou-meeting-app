import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from "react";
import { createGroup } from "../graphql/mutations";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { listGroups } from "../graphql/queries";

const IndexPage = () => {
  const [formState, setFormState] = useState({ name: '' })
  const [groups, setGroups] = useState([])

  // TODO: Fetch groups
  useEffect(() => {
    fetchGroups()
  }, [])

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormState({ ...formState, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    addGroup()
  }

  async function fetchGroups() {
    try {
      const groupData = await API.graphql(graphqlOperation(listGroups))
      setGroups(groupData.data.listGroups.items)
    } catch (error) {
      console.error('There was a problem fetching groups:\n', error)
    }
  }

  async function addGroup() {
    if (!formState.name) return
    try {
      const group = { ...formState }
      setFormState({ name: '' })
      await API.graphql(graphqlOperation(createGroup, { input: group }))
      await fetchGroups()
    } catch (error) {
      console.error('There was a problem adding a group:\n', error)
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: 320, margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
          <label style={{ marginBottom: 12 }} htmlFor="name">Group Name</label>
          <input style={{ marginBottom: 12 }} name="name" value={formState.name} type="text" onChange={handleInputChange} />
          <button type="submit">Submit</button>
        </form>
        <div id="group-list">
          <h2>Existing Groups:</h2>
          {groups.map(({ id, name }) => (<p key={id}>{name}</p>))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
