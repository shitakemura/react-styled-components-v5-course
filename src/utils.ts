export const colors = {
  primary: '#645cff',
}

export const setupBoarder = ({
  width,
  type = 'solid',
  color,
}: {
  width: number
  type?: string
  color: string
}) => {
  return `${width}px ${type} ${color}`
}
