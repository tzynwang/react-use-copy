function styleResetter(raw: unknown) {
  const toFormat = raw as HTMLElement;
  const clone = toFormat.cloneNode(true) as HTMLElement;

  // format element itself, instead of formatting the children in a container
  if (clone.childNodes.length !== clone.children.length) {
    if (clone.classList.contains('ResetBgColor')) {
      clone.style.backgroundColor = '#fff';
    }
  } else {
    clone.childNodes.forEach((child) => {
      const typedChild = child as HTMLElement;
      if (typedChild.classList.contains('ResetBgColor')) {
        typedChild.style.backgroundColor = '#fff';
      }
    });
  }

  return clone;
}

export default styleResetter;
