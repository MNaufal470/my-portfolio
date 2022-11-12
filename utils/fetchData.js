export const fetchUserInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getUserInfo`
  );
  const data = await res.json();
  const response = data.pageInfo;
  return response;
};

export const fetchSocial = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const data = await res.json();
  const response = data.socials;
  return response;
};

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const data = await res.json();
  const response = data.skills;
  return response;
};

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );
  const data = await res.json();
  const response = data.projects;
  return response;
};
