export interface QuickFilter {
  id: number
  label: string
  icon: string
  filter: Record<string, boolean>
}

export const quickFilters: QuickFilter[] = [
  // Essential utilities & costs
  { id: 1, label: 'Bills Included', icon: '💡', filter: { billsIncluded: true } },
  { id: 2, label: 'WiFi', icon: '📶', filter: { wifi: true } },

  // Living arrangements
  { id: 5, label: 'Private Bathroom', icon: '🚿', filter: { ensuiteBathroom: true } },
  { id: 6, label: 'Kitchen Access', icon: '🍳', filter: { kitchen: true } },

  // Policies & lifestyle
  { id: 7, label: 'Pet Friendly', icon: '🐕', filter: { petFriendly: true } },
  { id: 8, label: 'Couples Welcome', icon: '❤️', filter: { couples: true } },
  { id: 9, label: 'Student Friendly', icon: '🎓', filter: { studentFriendly: true } },

  // Essential appliances
  { id: 12, label: 'Washing Machine', icon: '🧺', filter: { washingMachine: true } },
  { id: 13, label: 'Air Conditioning', icon: '❄️', filter: { airConditioning: true } },

  // Outdoor & extras
  { id: 14, label: 'Balcony/Terrace', icon: '🌿', filter: { balcony: true } },

  // Accessibility & convenience
  { id: 17, label: 'Elevator', icon: '🛗', filter: { elevator: true } },
]
