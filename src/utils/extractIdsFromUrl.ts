interface extractIdsFromUrlProps {
  itemId: string
  shopId: string
}

export function extractIdsFromUrl(url: string): extractIdsFromUrlProps | null {
  const regex = /i\.(\d+\.\d+)/
  const match = url.match(regex)

  if (!match) {
    return null
  }

  const [itemId, shopId] = match[1].split('.')
  return { itemId, shopId }
}
