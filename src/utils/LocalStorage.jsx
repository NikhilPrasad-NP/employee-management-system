const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        id: 101,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription: "Create the main dashboard UI using React.",
        taskDate: "2026-06-02",
        category: "Design"
      },
      {
        id: 102,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsive navbar issues.",
        taskDate: "2026-05-28",
        category: "Development"
      },
      {
        id: 103,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend API.",
        taskDate: "2026-05-25",
        category: "Backend"
      },
      {
        id: 104,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare project documentation.",
        taskDate: "2026-06-01",
        category: "Documentation"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        id: 201,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Build login page with validation.",
        taskDate: "2026-06-03",
        category: "Frontend"
      },
      {
        id: 202,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Perform component testing.",
        taskDate: "2026-06-04",
        category: "QA"
      },
      {
        id: 203,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update project README file.",
        taskDate: "2026-05-27",
        category: "Documentation"
      },
      {
        id: 204,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Review UI",
        taskDescription: "Review and improve user interface.",
        taskDate: "2026-05-30",
        category: "Design"
      }
    ]
  },

  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        id: 301,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup Database",
        taskDescription: "Configure MongoDB database.",
        taskDate: "2026-06-02",
        category: "Database"
      },
      {
        id: 302,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "User Authentication",
        taskDescription: "Implement JWT authentication.",
        taskDate: "2026-05-29",
        category: "Security"
      },
      {
        id: 303,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Server",
        taskDescription: "Deploy backend on cloud server.",
        taskDate: "2026-05-30",
        category: "DevOps"
      },
      {
        id: 304,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Create automated backup scripts.",
        taskDate: "2026-06-01",
        category: "Database"
      }
    ]
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        id: 401,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Profile Page",
        taskDescription: "Create employee profile page.",
        taskDate: "2026-06-05",
        category: "Frontend"
      },
      {
        id: 402,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve database query performance.",
        taskDate: "2026-06-01",
        category: "Database"
      },
      {
        id: 403,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate's pull request.",
        taskDate: "2026-05-26",
        category: "Review"
      },
      {
        id: 404,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create sprint review presentation.",
        taskDate: "2026-06-03",
        category: "Management"
      }
    ]
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        id: 501,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Design and develop landing page.",
        taskDate: "2026-06-06",
        category: "Frontend"
      },
      {
        id: 502,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix reported UI bugs.",
        taskDate: "2026-05-31",
        category: "Maintenance"
      },
      {
        id: 503,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDescription: "Run application performance tests.",
        taskDate: "2026-05-24",
        category: "QA"
      },
      {
        id: 504,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website search ranking.",
        taskDate: "2026-06-02",
        category: "Marketing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    )
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem(
      "admin",
      JSON.stringify(admin)
    )
  }
}

export const getLocalStorage = () => {
  const employees = JSON.parse(
    localStorage.getItem("employees")
  )

  const admin = JSON.parse(
    localStorage.getItem("admin")
  )

  return { employees, admin }
}