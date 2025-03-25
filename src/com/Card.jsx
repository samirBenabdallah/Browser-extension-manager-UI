function ToggleActive({ isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-[45px] h-6 rounded-xl flex duration-300 cursor-pointer ${
        isActive ? "bg-red-500" : "bg-neutral-300"
      }`}
    >
      <div
        className={`w-5 h-5 my-auto rounded-full bg-neutral-50 ${
          isActive ? "translate-x-[22px]" : "translate-x-[2px]"
        } duration-300`}
      ></div>
    </div>
  );
}

function Card({ extension, removeOnclik, toggleAciveStatus }) {
  let { name, logo, description, isActive } = extension;
  logo = logo.match(/logo-.*/)[0];
  return (
    <div className="w-full max-w-[400px] min-h-[150px] p-3 flex flex-col dark:bg-neutral-700 bg-neutral-50 rounded-xl">
      <div className="flex items-center">
        <img
          src={`/src/assets/images/${logo}`}
          className="mr-2"
          alt={"logo of " + name}
        />
        <div>
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="text-neutral-400 dark:text-neutral-200 text-sm">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <button
          onClick={() => removeOnclik(name)}
          className="rounded-2xl border border-neutral-500 px-3 py-1 capitalize font-semibold cursor-pointer hover:bg-red-600 hover:text-neutral-0 dark:hover:text-neutral-900 text-sm duration-300"
        >
          remove
        </button>
        <ToggleActive
          isActive={isActive}
          onClick={() => toggleAciveStatus(name)}
        />
      </div>
    </div>
  );
}
export default Card;
