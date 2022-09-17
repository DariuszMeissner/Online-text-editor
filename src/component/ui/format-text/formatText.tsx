const formatText = (command: string, defaultUi: boolean, value?: string) => {
  const selection = window.getSelection()
  let range

  if (selection?.rangeCount && selection.getRangeAt) {
    range = selection.getRangeAt(0)
  }

  // removing old ranges
  if (range) {
    selection?.removeAllRanges()
    selection?.addRange(range)
  }

  // formating text
  document.execCommand(command, defaultUi, value)
}

export default formatText
