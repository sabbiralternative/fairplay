// export const filterLiveVirtual = (data, isLive, isVirtual) => {
//   if (isLive && isVirtual) {
//     return data.visible === true;
//   }
//   if (!isLive && !isVirtual) {
//     return data.visible === true;
//   }

//   if (isLive && !isVirtual) {
//     return (
//       data.visible === true && !data.eventName?.includes("SRL")?.toLowerCase()
//     );
//   }
//   if (!isLive && isVirtual) {
//     return (
//       data.visible === true && data.eventName?.includes("SRL")?.toLowerCase()
//     );
//   }
// };
export const filterLiveVirtual = (data, liveVirtual) => {
  if (!data.visible) return false;

  // console.log(data);

  // const filterData = liveVirtual?.filter(
  //   (item) => item?.eventTypeId === data?.eventTypeId,
  // );

  // console.log(filterData);
  // const isSRL = data.eventName?.toLowerCase().includes("srl") ?? false;

  // if (liveVirtual.isLive === liveVirtual.isVirtual) return true; // both true or both false

  // return liveVirtual.isLive ? !isSRL : isSRL;
};
