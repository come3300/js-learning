const studies = [
    { language: 'HTML', hours: 10 },
    { language: 'CSS', hours: 20 },
    { language: 'JavaScript', hours: 150 },
    { language: 'Node.js', hours: 60 },
    { language: 'React', hours: 100 },
    { language: 'SQL', hours: 50 },
    { language: 'Python', hours: 120 },
    { language: 'TypeScript', hours: 30 },
    { language: 'Java', hours: 110 },
    { language: 'C#', hours: 10 }
];

//forEach

// map
const doubledHours = studies.map((study) => {
    return 2 * study.hours;
});

console.log(doubledHours);
