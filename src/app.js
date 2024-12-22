import * as yup from 'yup';

/* const validateRSSFeed = (url, existingFeeds) => {
  const schema = yup.object().shape({
    url: yup
      .string()
      .url()
      .required()
      .notOneOf(existingFeeds),
  });

  try {
    schema.validateSync(url);
    return null;
  } catch (error) {
    return error.message;
  }
};
*/
