type GraphQLError = {
  message: string;
};

export function handleGqlError(
  gqlError: GraphQLError | Array<GraphQLError>,
): void {
  let errMessage = '';
  if (gqlError instanceof Array) {
    errMessage = gqlError.map(err => err.message).join('\n');
  } else {
    errMessage = gqlError.message;
  }
  console.error(errMessage);
}
