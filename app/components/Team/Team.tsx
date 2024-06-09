import React from "react";
import TeamCard from "./TeamCard";

const teams = [
  {
    image: "/images/t1.jpg",
    name: "John Smith",
    position: "Kitchen Porter",
  },
  {
    image: "/images/t2.jpg",
    name: "Jack Joe",
    position: "Executive Checf",
  },
  {
    image: "/images/t3.jpg",
    name: "John Smith",
    position: "Head Chef",
  },
];

const Team = () => {

  const aosProperties = [
    { animation: "fade-right", delay: 0, placemetn: "top-center"},
    { animation: "zoom-in", delay: 300, placemetn: "top-center"},
    { animation: "fade-right", delay: 600, placement: "top-center" },
    // Add more properties if you have more team members or for a more complex setup
  ];
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading">
        MEET our expert <span className="text-red-600">Chefs</span>
      </h1>
      <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        
        {teams.map((team, index) => (
          <TeamCard 
          key={team.name}
          image={team.image} 
          name={team.name} 
          position={team.position} 
          animation={aosProperties[index % aosProperties.length].animation}
          placement= {aosProperties[index % aosProperties.length].placement}
          delay={aosProperties[index % aosProperties.length].delay}
          />
        ))}

      </div>
    </div>
  );
};

export default Team;
