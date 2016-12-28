export default $sce => {
  return text => {
    return $sce.trustAsHtml(text);
  };
}
