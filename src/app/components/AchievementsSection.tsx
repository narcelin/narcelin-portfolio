"use client";

const achievementsList = [
  { metric: "Projects", value: "100+", postfix: "+" },
  { metric: "Users", value: "1M+", prefix: "$" },
  { metric: "Awards", value: "10+", postfix: "+" },
  { metric: "Years", value: "5+", postfix: "+" },
];

export default function AchievementsSection() {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-4xl font-bold">{achievement.value}</h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
