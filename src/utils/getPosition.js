export const getPositionChanges = (newPosition) => {
    return [
        newPosition - 12,
        newPosition + 12,
        newPosition + 1,
        newPosition - 1
    ]
}