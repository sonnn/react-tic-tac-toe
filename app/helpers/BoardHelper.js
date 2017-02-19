function display (marker) {
  if (marker === 'X') {
    return 'remove'
  } else if (marker === 'O') {
    return 'record'
  }

  return 'unchecked'
}

function isEmpty (pos) {
  return pos === ' '
}

export { display, isEmpty }
