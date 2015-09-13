function intent(DOM, id) {
  return {
    isClicked$: DOM.select(`.${id}`).events(`click`)
      .map(() => true)
      .startWith(false),
  };
}

export default intent;
