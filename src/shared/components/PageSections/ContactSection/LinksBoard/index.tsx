"use client";

const LinksBoard = () => {
  const linkedin =
    "https://www.linkedin.com/in/luan-santos-oliveira-4b2a011a3/";
  const github = "https://github.com/LuanSOliveira";

  return (
    <div>
      <h3 className="text-2-title-size">Redes:</h3>
      <div className="flex gap-5">
        <a href={linkedin} target="_blank">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            className="w-[50]"
          />
        </a>
        <a href={github} target="_blank">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            className="bg-white rounded-full w-[50]"
          />
        </a>
      </div>
    </div>
  );
};

export default LinksBoard;
