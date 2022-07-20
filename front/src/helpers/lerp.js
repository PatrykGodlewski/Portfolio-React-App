function lerp(initialPosition, targetPosition, precentage = 0.2) {
  return (targetPosition - initialPosition) * precentage + initialPosition;
}

export default lerp;
