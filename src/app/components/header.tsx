const MyHeader = () => {
  return (
    <div className="mt-2 flex w-full flex-row items-center justify-center gap-4 rounded-md bg-blur-green py-4 drop-shadow-lg backdrop-blur-sm">
      <h1 className="grow text-center text-lg font-medium md:text-xl">
        My Book Of Shows
      </h1>
      <div className="pr-4 text-right">User</div>
    </div>
  );
};

export default MyHeader;
