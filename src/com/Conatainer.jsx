import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function Conatainer({ category = "all" }) {
  const [extensions, setExtensions] = useState([]);
  function removeExtension(name) {
    const newExtensions = extensions.filter((ele) => ele.name !== name);
    setExtensions(newExtensions);
  }
  function toggleAciveStatus(name) {
    const newExtensions = extensions.map((ele) => {
      if (ele.name === name) {
        ele.isActive = !ele.isActive;
      }
      return ele;
    });
    setExtensions(newExtensions);
  }
  useEffect(() => {
    (async function () {
      const res = await axios.get("data.json");
      setExtensions(res.data);
    })();
  }, []);
  return (
    <div className="px-3 grid grid-cols-3 gap-5 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1 place-items-center">
      {category === "all" && (
        <>
          {extensions.map((ele, index) => (
            <Card
              extension={ele}
              key={`extension-${ele.name}-${index}`}
              removeOnclik={removeExtension}
              toggleAciveStatus={toggleAciveStatus}
            />
          ))}
        </>
      )}

      {category === "active" && (
        <>
          {extensions.map((ele, index) => {
            if (ele.isActive)
              return (
                <Card extension={ele} key={`extension-${ele.name}-${index}`} />
              );
            return null;
          })}
        </>
      )}

      {category === "inactive" && (
        <>
          {extensions.map((ele, index) => {
            if (!ele.isActive)
              return (
                <Card extension={ele} key={`extension-${ele.name}-${index}`} />
              );
          })}
        </>
      )}
    </div>
  );
}

export default Conatainer;
