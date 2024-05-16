"use client";

const achievementsList = [
  { metric: "Projects", value: "~50" },
  { metric: "Trainees", value: "13+" },
  { metric: "Certificates", value: "9+" },
  { metric: "Languages", value: "2" },
];

export default function AchievementsSection() {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-c3 border rounded-md py-8 px-16 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-4xl text-heading font-bold">
                {achievement.value}
              </h2>
              <p className="text-pText text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
