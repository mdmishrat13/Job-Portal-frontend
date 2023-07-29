// Function to generate random job category
function getRandomJobCategory() {
    const jobCategories = ['Programming', 'Digital Marketing', 'Graphics Design', 'Data Analysis', 'Customer Support', 'Content Writing'];
    const randomIndex = Math.floor(Math.random() * jobCategories.length);
    return jobCategories[randomIndex];
  }
  
  // Function to generate random job type
  function getRandomJobType() {
    const jobTypes = ['Full Time', 'Part Time', 'Remote'];
    const randomIndex = Math.floor(Math.random() * jobTypes.length);
    return jobTypes[randomIndex];
  }
  
  // Function to generate random salary range
  function getRandomSalaryRange() {
    const minSalary = Math.floor(Math.random() * 30000) + 30000; // Minimum salary between 30000 to 60000
    const maxSalary = minSalary + Math.floor(Math.random() * 40000); // Maximum salary between 30000 to 70000
    return `$${minSalary} - $${maxSalary}`;
  }
  
  // Generate 20 fake data objects
  const fakeData = [];
  
  for (let i = 1; i <= 20; i++) {
    const data = {
      id: i,
      companyName: `Company ${i}`,
      companyLocation: `Location ${i}`,
      jobCategory: getRandomJobCategory(),
      jobType: getRandomJobType(),
      salaryRange: getRandomSalaryRange(),
      jobDescription: `This is a fake job description for job ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    };
    fakeData.push(data);
  }
  
  export default fakeData
  