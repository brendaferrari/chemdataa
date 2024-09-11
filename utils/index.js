export const navigateToNewTab = (path) => {
  return navigateTo(path, {
    open: {
      target: '_blank', rel: "noopener noreferrer",
    },
  })
}