import translate from "deepl"
export const getTraduction = (source) => {
let traduction = translate({
    text: source,
    target_lang: 'EN',
    auth_key: '85feb087-efb6-fec2-bd2b-e4f2309944c5',
    // All optional parameters available in the official documentation can be defined here as well.
  })
  .then(result => {
        return result.data
  })
  .catch(error => {
    //   console.error(error)
  });

  return traduction
}
