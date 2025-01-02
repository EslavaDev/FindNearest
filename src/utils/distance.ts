export const calculateDistance = (
  lat1: string,
  lon1: string,
  lat2: string,
  lon2: string,
): number => {
  const R = 6371;
  const lat1Num = parseFloat(lat1);
  const lon1Num = parseFloat(lon1);
  const lat2Num = parseFloat(lat2);
  const lon2Num = parseFloat(lon2);

  const dLat = ((lat2Num - lat1Num) * Math.PI) / 180;
  const dLon = ((lon2Num - lon1Num) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1Num * Math.PI) / 180) *
      Math.cos((lat2Num * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
