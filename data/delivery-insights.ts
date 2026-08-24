export const deliveryInsights = {
  totalItems: 855,
  finalizedItems: 816,
  tasks: 481,
  incidents: 335,
  stories: 39,
  highPriority: 295,
  sourceLabel: "Delivery activity snapshot",
} as const;

export const deliveryCompletion = Math.round((deliveryInsights.finalizedItems / deliveryInsights.totalItems) * 100);
