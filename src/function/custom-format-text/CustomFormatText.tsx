const wrap = (tags: HTMLElement) => {
  const select = window.getSelection()
  if (select?.rangeCount) {
    const range = select.getRangeAt(0).cloneRange()
    range.surroundContents(tags)
    select.removeAllRanges()
    select.addRange(range)
  }
}

const tags = (nameTag: string, nameClass: string) => {
  const ele = document.createElement(nameTag)
  ele.classList.add(nameClass)
  wrap(ele)
}

export default tags
