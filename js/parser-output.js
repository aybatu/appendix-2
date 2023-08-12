var entities = [{
  "id": 1,
  "typeString": "class",
  "methods": [
    {
  "name": "setUpWithError() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDownWithError() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testExample() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testPerformanceExample() throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "WorkGroupTests",
  "superClass": 173
},{
  "id": 2,
  "typeString": "class",
  "methods": [
    {
  "name": "setUpWithError() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tearDownWithError() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testExample() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testLaunchPerformance() throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "WorkGroupUITests",
  "superClass": 173
},{
  "id": 3,
  "typeString": "class",
  "properties": [
    {
  "name": "var runsForEachTargetApplicationUIConfiguration: Bool",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "setUpWithError() throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "testLaunch() throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "WorkGroupUITestsLaunchTests",
  "superClass": 173
},{
  "id": 4,
  "typeString": "class",
  "methods": [
    {
  "name": "application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "application(_ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    175
  ],
  "name": "AppDelegate",
  "superClass": 174
},{
  "id": 5,
  "typeString": "class",
  "properties": [
    {
  "name": "var window: UIWindow?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidDisconnect(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidBecomeActive(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneWillResignActive(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneWillEnterForeground(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidEnterBackground(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SceneDelegate",
  "superClass": 174
},{
  "id": 6,
  "typeString": "enum",
  "cases": [
    {
  "name": "success case failure"
}
  ],
  "name": "CreateProjectResult"
},{
  "id": 7,
  "typeString": "enum",
  "cases": [
    {
  "name": "success case failure"
}
  ],
  "name": "EditAccountResult"
},{
  "id": 8,
  "typeString": "enum",
  "cases": [
    {
  "name": "success case failure"
}
  ],
  "name": "AccountCreationResult"
},{
  "id": 9,
  "typeString": "enum",
  "cases": [
    {
  "name": "available case unavailable"
}
  ],
  "name": "AssignNewTaskToEmployee"
},{
  "id": 10,
  "typeString": "enum",
  "cases": [
    {
  "name": "success case failure"
}
  ],
  "name": "EditProjectResult"
},{
  "id": 11,
  "typeString": "enum",
  "cases": [
    {
  "name": "success case failure"
}
  ],
  "name": "AddTaskResult"
},{
  "id": 12,
  "typeString": "enum",
  "cases": [
    {
  "name": "success case thereIsNoBreakTime"
},
    {
  "name": "employeeIsNotAvailable"
}
  ],
  "name": "InviteMeetingResult"
},{
  "id": 13,
  "typeString": "protocol",
  "methods": [
    {
  "name": "validateName(_ name: String, employeeNameTextField: UITextField, employeeNameLabel: UILabel ) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validateSurname(_ surname: String, employeeSurnameTextField: UITextField, employeeSurnameLabel: UILabel) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validateEmail(_ email: String, emailAddressTextField: UITextField, emailAddressLabel: UILabel) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "doEmailsMatch(_ email: String, _ confirmEmail: String, confirmEmailAddressTextField: UITextField, confirmEmailAddressLabel: UILabel) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validatePassword(_ password: String, passwordTextField: UITextField, passwordLabel: UILabel) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "doPasswordsMatch(_ password: String, _ confirmPassword: String, confirmPasswordTextField: UITextField, confirmPasswordLabel: UILabel) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AccountValidator",
  "extensions": [
    14
  ]
},{
  "id": 15,
  "typeString": "class",
  "methods": [
    {
  "name": "checkForCompanyName(_ text: String, companyNameTextField: UITextField, companyNameLabel: UILabel) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    13
  ],
  "name": "CompanyAccountValidator"
},{
  "id": 16,
  "typeString": "struct",
  "methods": [
    {
  "name": "isEmployeeAvailable(meetingDate: Date, meetingStartTime: Date, employee: Employee, completion: @escaping(InviteMeetingResult) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingInviteValidator"
},{
  "id": 17,
  "typeString": "struct",
  "methods": [
    {
  "name": "checkEmployeeAvailablity(employee: Employee, completion: @escaping(AssignNewTaskToEmployee) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "EmployeeAvailablityValidator"
},{
  "id": 18,
  "typeString": "class",
  "protocols": [
    13
  ],
  "name": "UserAccountValidator"
},{
  "id": 19,
  "typeString": "enum",
  "protocols": [
    177
  ],
  "cases": [
    {
  "name": "accountType case emailAddress case userFirstName case userLastName case password case userTasks case managerMeetings"
}
  ],
  "name": "CodingKeys",
  "superClass": 176
},{
  "id": 20,
  "typeString": "class",
  "properties": [
    {
  "name": "var accountType: AccountTypes",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailAddress: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userFirstName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userLastName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var password: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var managerMeetings: [Meeting] required",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "hash(into hasher: inout Hasher)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(to encoder: Encoder) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeName(newName: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeLastName(newLastName: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeEmail(newEmail: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changePassword(newPassword: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeAccountType(newAccountType: AccountTypes)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "< (lhs: Manager, rhs: Manager) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "== (lhs: Manager, rhs: Manager) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(emailAddress: String, userFirstName: String, userLastName: String, password: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    34
  ],
  "name": "Manager",
  "containedEntities": [
    19
  ]
},{
  "id": 21,
  "typeString": "enum",
  "cases": [
    {
  "name": "meetingDate case meetingStartTime case meetingEndTime case meetingTitle case meetingDescription"
}
  ],
  "name": "CodingKeys",
  "superClass": 176
},{
  "id": 22,
  "typeString": "class",
  "properties": [
    {
  "name": "var meetingDate: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingStartTime: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingEndTime: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingTitle: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingDescription: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let customDateFormat",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let customTimeFormat",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "hash(into hasher: inout Hasher)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(to encoder: Encoder) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "== (lhs: Meeting, rhs: Meeting) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(meetingDate: Date, meetingStartTime: Date, meetingEndTime: Date, meetingTitle: String, meetingDescription: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "Meeting",
  "superClass": 178,
  "containedEntities": [
    21
  ]
},{
  "id": 23,
  "typeString": "enum",
  "cases": [
    {
  "name": "accountType case emailAddress case userFirstName case userLastName case password"
}
  ],
  "name": "CodingKeys",
  "superClass": 176
},{
  "id": 24,
  "typeString": "class",
  "properties": [
    {
  "name": "var accountType: AccountTypes",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailAddress: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userFirstName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userLastName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var password: String required",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "hash(into hasher: inout Hasher)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(to encoder: Encoder) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeName(newName: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeLastName(newLastName: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeEmail(newEmail: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changePassword(newPassword: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeAccountType(newAccountType: AccountTypes)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "< (lhs: Admin, rhs: Admin) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "== (lhs: Admin, rhs: Admin) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(accountType: AccountTypes, emailAddress: String, userFirstName: String, userLastName: String, password: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    34
  ],
  "name": "Admin",
  "containedEntities": [
    23
  ]
},{
  "id": 25,
  "typeString": "enum",
  "cases": [
    {
  "name": "title case description case tasks case startDate case endDate case completedTasks case completedTasksRequests"
}
  ],
  "name": "CodingKeys",
  "superClass": 176
},{
  "id": 26,
  "typeString": "class",
  "properties": [
    {
  "name": "var title: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tasks: [Task]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var startDate: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var endDate: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isProjectComplete: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var completedTasksRequests: [Task]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var completedTasks: [Task]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let customDateFormat",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "encode(to encoder: Encoder) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "hash(into hasher: inout Hasher)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "addTask(task: Task)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "editStartDate(newStartDate: Date)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "editEndDate(newEndDate: Date)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "editTitle(newTitle: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "editDecription(newDescription: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "== (lhs: Project, rhs: Project) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "< (lhs: Project, rhs: Project) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(title: String, description: String, tasks: [Task], startDate: Date, endDate: Date)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "Project",
  "superClass": 180,
  "containedEntities": [
    25
  ]
},{
  "id": 27,
  "typeString": "enum",
  "properties": [
    {
  "name": "let allCases",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeeCases",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "MANAGER case EMPLOYEE case ADMIN static let allCases"
}
  ],
  "name": "AccountTypes",
  "superClass": 176
},{
  "id": 28,
  "typeString": "enum",
  "cases": [
    {
  "name": "accountType case emailAddress case userFirstName case userLastName case password case userTasks case employeeInvitedMeetings"
}
  ],
  "name": "CodingKeys",
  "superClass": 176
},{
  "id": 29,
  "typeString": "class",
  "properties": [
    {
  "name": "var accountType: AccountTypes",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailAddress: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userFirstName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userLastName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var password: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userTasks: [Task]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var employeeInvitedMeetings: [Meeting]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let employeeTaskCapacity: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "hash(into hasher: inout Hasher)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "encode(to encoder: Encoder) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeAccountType(newAccountType: AccountTypes)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeName(newName: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeLastName(newLastName: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeEmail(newEmail: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changePassword(newPassword: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "assignTask(task: Task)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "removeTask(task: Task)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "addMeeting(meeting: Meeting)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "removeMeeting(meeting: Meeting)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "< (lhs: Employee, rhs: Employee) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "== (lhs: Employee, rhs: Employee) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(emailAddress: String, userFirstName: String, userLastName: String, password: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    34
  ],
  "name": "Employee",
  "containedEntities": [
    28
  ]
},{
  "id": 30,
  "typeString": "enum",
  "cases": [
    {
  "name": "registrationNumber case companyName case ownerAccount case employeeAccounts case managerAccounts case projects case meetings case completedProjects"
}
  ],
  "name": "CodingKeys",
  "superClass": 176
},{
  "id": 31,
  "typeString": "class",
  "properties": [
    {
  "name": "var registrationNumber: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var companyName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ownerAccount: Admin",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var employeeAccounts: [Employee]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var managerAccounts: [Manager]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var projects: [Project]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetings: [Meeting]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var completedProjects: [Project] required",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "encode(to encoder: Encoder) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "addUserAccount(_ userAccountRequest: CreateUserAccountRequest)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "removeUserAccount(_ employeeAccount: Employee)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "addProject(_ project: Project, completion: @escaping (Bool) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "addMeeting(_ meeting: Meeting)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "completeProject(project: Project)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(companyName: String, ownerAccount: Admin)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "Company",
  "containedEntities": [
    30
  ]
},{
  "id": 32,
  "typeString": "enum",
  "cases": [
    {
  "name": "title case description case assignedEmployees case taskStartDate case taskEndDate"
}
  ],
  "name": "CodingKeys",
  "superClass": 176
},{
  "id": 33,
  "typeString": "class",
  "properties": [
    {
  "name": "var title: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var description: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var assignedEmployees: [Employee]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskEmployeeLimit",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isTaskCompleted: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskStartDate: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskEndDate: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskCompleteRequest",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let customDateFormat",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "encode(to encoder: Encoder) throws",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "assignEmployee(employee: Employee, completion: @escaping(Bool, Bool, Bool) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "completeTask()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "editTaskTitle(newTitle: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "editTaskDescription(newDescription: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "editAssignedEmployees(employees: [Employee])",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "editStartDate(startDate: Date)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "editEndDate(endDate: Date)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "revertTaskCompletion()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "hash(into hasher: inout Hasher)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "< (lhs: Task, rhs: Task) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "== (lhs: Task, rhs: Task) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "init(title: String, description: String, assignedEmployees: [Employee], taskStartDate: Date, taskEndDate: Date)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "Task",
  "containedEntities": [
    32
  ]
},{
  "id": 34,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var accountType: AccountTypes",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailAddress: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userFirstName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userLastName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var password: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "UserAccount",
  "extensions": [
    35
  ]
},{
  "id": 36,
  "typeString": "class",
  "methods": [
    {
  "name": "binarySearch<U: Comparable>(_ array: [T], target: U, keyPath: KeyPath<T, U>) -> T?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Search",
  "superClass": 181
},{
  "id": 37,
  "typeString": "class",
  "properties": [
    {
  "name": "let monitor",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isMonitoring",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isNetworkAvailable: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var connectionStatusChangedHandler: ((Bool) -> Void)?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "setupPathUpdateHandler()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "startMonitoring()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "stopMonitoring()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Reachability"
},{
  "id": 38,
  "typeString": "class",
  "properties": [
    {
  "name": "var titleLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var descriptionLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var endDateLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var startDateLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var progressBar: UIProgressView!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "ProjectListTableCell",
  "superClass": 182
},{
  "id": 39,
  "typeString": "struct",
  "methods": [
    {
  "name": "styleTextView(_ textView: UITextView)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TextView"
},{
  "id": 40,
  "typeString": "class",
  "properties": [
    {
  "name": "let placeholderLabel: UILabel",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let characterCountLabel: UILabel",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var placeholder: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var text: String!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var font: UIFont?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var textColor: UIColor?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "commonInit()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "textDidChange()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "styleTextView()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "updateCharacterCount()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "limitCharacterCount()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "CustomTextView",
  "superClass": 183
},{
  "id": 41,
  "typeString": "class",
  "properties": [
    {
  "name": "var meetingDateLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingTitleLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingDescriptionLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingEndTimeLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingStartTimeLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingTimeProgressBar: UIProgressView!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingListTableCell",
  "superClass": 182
},{
  "id": 42,
  "typeString": "class",
  "properties": [
    {
  "name": "var tableView",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var userAccounts: [Employee?]",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "showDropdownMenu(from button: UIButton, with userAccounts: [Employee?], tableView: UITableView, completion: @escaping (Employee) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "EmployeeListDropDownMenu"
},{
  "id": 43,
  "typeString": "class",
  "properties": [
    {
  "name": "var tableView",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var accountTypes: [AccountTypes]",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "showDropdownMenu(from button: UIButton, with accountTypes: [AccountTypes], tableView: UITableView, completion: @escaping (AccountTypes) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "UserAccountTypeDropDownMenu"
},{
  "id": 44,
  "typeString": "class",
  "name": "EmployeeListDropDownMenuCell",
  "superClass": 182
},{
  "id": 45,
  "typeString": "class",
  "properties": [
    {
  "name": "var employeeAccountTypeLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var employeeEmailAddressLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var employeeNameLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userPhotoImageView: UIImageView!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "awakeFromNib()",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "EmployeeListTableCell",
  "superClass": 182
},{
  "id": 46,
  "typeString": "struct",
  "methods": [
    {
  "name": "styleTextField(_ textField: UITextField)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TextFieldStyle"
},{
  "id": 47,
  "typeString": "class",
  "methods": [
    {
  "name": "doPasswordsMatch(doMatch: Bool, confirmPasswordTextField: UITextField, confirmPasswordLabel: UILabel)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validateName(isValid: Bool, employeeNameTextField: UITextField, employeeNameLabel: UILabel )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validateSurname(isValid: Bool, employeeSurnameTextField: UITextField, employeeSurnameLabel: UILabel)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validateEmail(isValid: Bool, emailAddressTextField: UITextField, emailAddressLabel: UILabel)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "doEmailsMatch(doMatch: Bool, confirmEmailAddressTextField: UITextField, confirmEmailAddressLabel: UILabel)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validatePassword(isValid: Bool, passwordTextField: UITextField, passwordLabel: UILabel)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TextFieldAccountValidatorView"
},{
  "id": 48,
  "typeString": "class",
  "methods": [
    {
  "name": "checkForCompanyName(isEmpty: Bool, companyNameTextField: UITextField, companyNameLabel: UILabel)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TextFieldCompanyValidatorView"
},{
  "id": 49,
  "typeString": "class",
  "name": "UserAccountTypeCell",
  "superClass": 182
},{
  "id": 50,
  "typeString": "struct",
  "properties": [
    {
  "name": "var originalMeeting: Meeting",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meeting: Meeting",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var invitedEmployeeList: [Employee]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "UpdateMeetingRequest"
},{
  "id": 51,
  "typeString": "struct",
  "properties": [
    {
  "name": "var project: Project",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "CompleteProjectTaskRequest"
},{
  "id": 52,
  "typeString": "struct",
  "properties": [
    {
  "name": "let accountType: AccountTypes",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let emailAddress: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let userFirstName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let userLastName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let password: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "DeleteUserAccountRequest"
},{
  "id": 53,
  "typeString": "struct",
  "properties": [
    {
  "name": "var meeting: Meeting",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var invitedEmployeeList: [Employee]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "ScheduleMeetingRequest"
},{
  "id": 54,
  "typeString": "struct",
  "properties": [
    {
  "name": "let accountType: AccountTypes",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let emailAddress: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let userFirstName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let userLastName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let password: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "CreateUserAccountRequest"
},{
  "id": 55,
  "typeString": "struct",
  "properties": [
    {
  "name": "var project: Project",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var task: Task",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "TaskCompletionRequest"
},{
  "id": 56,
  "typeString": "struct",
  "properties": [
    {
  "name": "let originalProjectTitle: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let updatedProject: Project",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "UpdateProjectRequest"
},{
  "id": 57,
  "typeString": "struct",
  "properties": [
    {
  "name": "let originalEmailAddress: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newAccountType: AccountTypes",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newEmailAddress: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newUserFirstName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newUserLastName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newPassword: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let originalAccountType: AccountTypes",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    179
  ],
  "name": "UpdateUserAccountRequest"
},{
  "id": 58,
  "typeString": "struct",
  "methods": [
    {
  "name": "validateCompanyRegistrationNumber(registrationNumber: String, completion: @escaping (Bool, Bool, Company?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CompanyValidationService"
},{
  "id": 59,
  "typeString": "struct",
  "methods": [
    {
  "name": "validateUser(company: Company?, email: String, password: String, completion: @escaping (Bool, Bool, AccountTypes?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "UserValidationService"
},{
  "id": 60,
  "typeString": "struct",
  "methods": [
    {
  "name": "sendProjectCreationRequest(registrationNumber: String, projectRequest: Project, completion: @escaping(Bool, String) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateProject(registrationNumber: String, updatedProjectRequest: UpdateProjectRequest, completion: @escaping (Bool, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "markProjectCompleted(registrationNumber: String, project: Project, completion: @escaping (Bool, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ProjectService"
},{
  "id": 61,
  "typeString": "class",
  "methods": [
    {
  "name": "updateAccount(companyRegistrationNumber: String, request: UpdateUserAccountRequest, completion: @escaping (Bool, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "UpdateAccountService"
},{
  "id": 62,
  "typeString": "class",
  "methods": [
    {
  "name": "createAccount(companyRegistrationNumber: String, accountType: String, request: CreateUserAccountRequest, completion: @escaping (Bool, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "deleteAccount(companyRegistrationNumber: String, request: DeleteUserAccountRequest, completion: @escaping (Bool, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CompanyService"
},{
  "id": 63,
  "typeString": "class",
  "methods": [
    {
  "name": "register<T: UserAccount>(userAccount: T, company: Company, completion: @escaping (Bool, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CreateOwnerAccountService"
},{
  "id": 64,
  "typeString": "class",
  "methods": [
    {
  "name": "sendCompleteTaskRequest(registrationNumber: String, taskCompleteRequest: TaskCompletionRequest, completion: @escaping (Bool, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "rejectTaskCompletionRequest(registrationNumber: String, rejectTaskRequest: CompleteProjectTaskRequest, completion: @escaping (Bool, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "acceptTaskCompletionRequest(registrationNumber: String, completeTaskRequest: CompleteProjectTaskRequest, completion: @escaping (Bool, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TaskService"
},{
  "id": 65,
  "typeString": "struct",
  "methods": [
    {
  "name": "register(company: Company, completion: @escaping (Bool, String?, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RegistrationService"
},{
  "id": 66,
  "typeString": "struct",
  "methods": [
    {
  "name": "scheduleMeeting(companyRegistrationNo: String, meetingRequest: ScheduleMeetingRequest, completion: @escaping(Bool, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateMeeting(registrationNumber: String, request: UpdateMeetingRequest, completion: @escaping (Bool, String?) -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingService"
},{
  "id": 67,
  "typeString": "class",
  "properties": [
    {
  "name": "var registrationNo: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var registrationNumberLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "goBackToMainMenu(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CreateCompanyAccountSuccessViewController",
  "superClass": 184
},{
  "id": 68,
  "typeString": "class",
  "properties": [
    {
  "name": "var companyNameTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var companyNameLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailAddressTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailAddressLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailAddressConfirmTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var confirmEmailAddressLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var passwordTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var passwordLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var confirmPasswordTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var confirmPasswordLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var registerCompanyButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var firstNameTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var firstNameLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var surnameTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var surnameLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var textFields: [UITextField]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isCompany",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isEmailValid",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isEmailMatch",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isPasswordValid",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isPasswordMatch",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isFirstname",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isSurname",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var registeredCompany: Company?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isFailWithError: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let textFieldStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let loadingVC",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupTextFields()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "registerCompanyButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "enableRegistrationButton()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "CreateCompanyAccountViewController",
  "superClass": 184,
  "extensions": [
    69,
    70
  ]
},{
  "id": 71,
  "typeString": "class",
  "properties": [
    {
  "name": "var errorMessageLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorMessage: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tryAgainButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "goBackToMainMenu(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CreateCompanyAccountFailViewController",
  "superClass": 184
},{
  "id": 72,
  "typeString": "class",
  "properties": [
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userAccounts",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "createUserAccountButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "editEmployeeAccount(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "logoutButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "logout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getUserAccountList(completion: @escaping ([any UserAccount]) -> Void)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "AdminMainMenuViewController",
  "superClass": 184
},{
  "id": 73,
  "typeString": "class",
  "properties": [
    {
  "name": "var errorMessageLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorMessage: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tryAgainButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "goBackToMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CreateUserAccountFailViewController",
  "superClass": 184
},{
  "id": 74,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "createNewUserAccButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "goBackToMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CreateUserAccountSuccessViewController",
  "superClass": 184
},{
  "id": 75,
  "typeString": "class",
  "properties": [
    {
  "name": "var tapGesture: UITapGestureRecognizer!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var employeeNameTextField: UITextField!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var employeeNameLabel: UILabel!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var employeeSurnameLabel: UILabel!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var employeeSurnameTextField: UITextField!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var selectAccountTypeButton: UIButton!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var emailAddressTextField: UITextField!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var emailAddressLabel: UILabel!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var confirmEmailAddressTextField: UITextField!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var passwordTextField: UITextField!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var passwordLabel: UILabel!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var confirmPasswordLabel: UILabel!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var confirmPasswordTextField: UITextField!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var createUserAccButton: UIButton!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var confirmEmailAddressLabel: UILabel!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let accountTypeDropDownMenu",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isFailWithError: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var tableView",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var textFields: [UITextField]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isNameValid",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isSurnameValid",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isEmailValid",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var doEmailsMatch",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isPasswordValid",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var doPasswordsMatch",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isAccountExist",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var accountTypes: [AccountTypes]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var accountType: AccountTypes?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var textFieldStyle",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupTapGesture()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "handleTap(_ sender: UITapGestureRecognizer)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setAccountTypes()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupTextFields()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "createUserAccButtonTapped(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "selectAccountTypeMenu(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "showDropdownMenu()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "discardButtonTapped(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "performDiscard()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "enableRegistrationButton()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "CreateUserAccountViewController",
  "superClass": 184,
  "extensions": [
    76,
    77
  ]
},{
  "id": 78,
  "typeString": "class",
  "properties": [
    {
  "name": "var tapGesture: UITapGestureRecognizer!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var saveChangesButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var employeeAccountTypeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nameLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lastNameLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var confirmEmailLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var passwordLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var confirmPasswordLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nameTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lastNameTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailConfirmTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var passwordTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var passwordConfirmTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tableView",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let userAccountTypeDropDownMenu",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var userAccount: (any UserAccount)?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userAccounts: [any UserAccount]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let accountTypeDropDownMenu",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let accountTypes: [AccountTypes]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var accountType: AccountTypes?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let textFieldStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var textFields: [UITextField]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isNameValid",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isLastNameValid",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isEmailValid",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var doEmailsMatch",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isPasswordValid",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var doPasswordsMatch",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isFailWithError: String? @objc",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupTapGesture()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "handleTap(_ sender: UITapGestureRecognizer)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupTextFields()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "addUserCurrentInfoUpdateView()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "discardButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "performDiscard()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "saveChangesButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "accountTypeButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "enableSaveChangesButton()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "showDropDownMenu()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "EditUserAccountDetailsViewController",
  "superClass": 184,
  "extensions": [
    79,
    80,
    81
  ]
},{
  "id": 82,
  "typeString": "class",
  "properties": [
    {
  "name": "var editFailMessageLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var failMessage: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tryAgainButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMainMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "EditUserAccountFailViewController",
  "superClass": 184
},{
  "id": 83,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "accountListButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "EditUserAccountSuccessViewController",
  "superClass": 184
},{
  "id": 84,
  "typeString": "class",
  "properties": [
    {
  "name": "var employeeListTableView: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userAccounts",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "mainMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "EditUserAccountListViewController",
  "superClass": 184,
  "extensions": [
    85
  ]
},{
  "id": 86,
  "typeString": "class",
  "properties": [
    {
  "name": "var managerMenuNavBar: UINavigationItem!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company? @objc",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "logoutButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "logout()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ManagerAccountMenuViewController",
  "superClass": 184
},{
  "id": 87,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ProjectDetailsChangeSuccessfulViewController",
  "superClass": 184
},{
  "id": 88,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "taskListButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ProjectTaskEditSuccessfulViewController",
  "superClass": 184
},{
  "id": 89,
  "typeString": "class",
  "properties": [
    {
  "name": "var task: Task?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var project: Project?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let textViewStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let textFieldStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var assignedEmployees: [Employee]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var employeeArr: [Employee?]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let dropDownMenu",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var errorWithFail: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var tableView: UITableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskTitleTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskDescriptionTextView: UITextView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var firstEmployeeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var secondEmployeeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var thirdEmployeeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fourthEmployeeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fifthEmployeeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskEndDatePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskStartDatePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tapGesture: UITapGestureRecognizer!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var selectedButton: UIButton?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var taskEndDateLimiter",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var assignableTaskMinimumDayLimit",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupTapGesture()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "handleTap(_ sender: UITapGestureRecognizer)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "styleTextArea()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setUpTextFields()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "loadData()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setUpButtonTitle()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setUpDatePickerDates()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setUpDatePickerRanges()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "startDatePicker(_ sender: UIDatePicker)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "selectEmployeeButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "saveChangesButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "showDropDownMenu(sender: UIButton)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "ProjectEditTaskDetailViewController",
  "superClass": 184,
  "extensions": [
    90,
    91
  ]
},{
  "id": 92,
  "typeString": "class",
  "properties": [
    {
  "name": "var project: Project?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectedTask: Task?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskListTableView: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "progressBarCaculator(startDate: Date, endDate: Date) -> Float",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ProjectEditTaskListViewController",
  "superClass": 184,
  "extensions": [
    93
  ]
},{
  "id": 94,
  "typeString": "class",
  "properties": [
    {
  "name": "var errorLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorMsg: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tryAgainButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ProjectTaskEditFailViewController",
  "superClass": 184
},{
  "id": 95,
  "typeString": "class",
  "properties": [
    {
  "name": "var projectTitleTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var projectDescriptionTextView: UITextView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var startDatePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var endDatePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var project: Project?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let loadingVC",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let textViewStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let textFieldStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var projectDetails: [String: Any?]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var editProjectDetailFailWithError: String?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupTextArea()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "updateProjectData()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setUpDatePicker(projectStartDate: Date)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "startDatePicker(_ sender: UIDatePicker)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "saveChangesButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "discardButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "performDiscard()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "ProjectDetailsEditViewController",
  "superClass": 184,
  "extensions": [
    96
  ]
},{
  "id": 97,
  "typeString": "class",
  "properties": [
    {
  "name": "var editProjectFailLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorMsg: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tryAgainButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ProjectDetailsChangeFailViewController",
  "superClass": 184
},{
  "id": 98,
  "typeString": "class",
  "properties": [
    {
  "name": "var projectListTable: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var project: Project?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "progressCalculator(startDate: Date, endDate:Date) -> Float",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "alert(message: String)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "ProjectListEdit",
  "superClass": 184,
  "extensions": [
    99
  ]
},{
  "id": 100,
  "typeString": "class",
  "properties": [
    {
  "name": "var projectTitleLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var assignedEmployeesLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskDescriptionLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskTitleLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ProjectDescriptionLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var project: Project?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var task: Task?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskService: TaskService",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "acceptRequestTap(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "rejectRequestTap(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "alert(_ message: String, _ title: String)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "acceptRequest()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "rejectRequest()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "CompletionRequestTaskDetailsViewController",
  "superClass": 184
},{
  "id": 101,
  "typeString": "class",
  "properties": [
    {
  "name": "var taskListTableView: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskCompleteRequestsMap: [Task: Project]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var selectedProject: Project?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectedTask: Task?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "loadData()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CompletedTaskListTableViewController",
  "superClass": 185
},{
  "id": 102,
  "typeString": "class",
  "properties": [
    {
  "name": "var projectTasksButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var projectTitleTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var projectDescriptionTextView: UITextView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var createProjectNavBar: UINavigationItem!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var endDatePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var startDatePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let textViewStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let textFieldStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var projectDetails: [String: Any?]",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupTextArea()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setUpDatePicker()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "updateEndDatePickerLimits()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "startDatePicker(_ sender: UIDatePicker)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "discard(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "performDiscard()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "enableProjectTaskButton(isTitle: Bool, isDescription: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ProjectDetailsViewController",
  "superClass": 184,
  "extensions": [
    103
  ]
},{
  "id": 104,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToTaskMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ProjectAddTaskSuccessfulViewController",
  "superClass": 184
},{
  "id": 105,
  "typeString": "class",
  "properties": [
    {
  "name": "var taskErrorTextField: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorMessage: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tryAgainButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ProjectAddTaskFailViewController",
  "superClass": 184
},{
  "id": 106,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "createNewProjectButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "mainMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CreatProjectSuccessfulViewController",
  "superClass": 184
},{
  "id": 107,
  "typeString": "class",
  "properties": [
    {
  "name": "var createProjectErrorMessageTextField: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorMessage: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tryAgainButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMainMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CreatProjectFailViewController",
  "superClass": 184
},{
  "id": 108,
  "typeString": "class",
  "properties": [
    {
  "name": "var firstEmployeeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var secondEmployeeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var thirdEmployeeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fourthEmployeeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fifthEmployeeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskTitleTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskDescriptionTextView: UITextView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskEndDatePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskStartDatePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectedButton: UIButton?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var tapGesture: UITapGestureRecognizer!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var tableView: UITableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var employeeArray: [Employee?]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let textViewStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let textFieldStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var assignedUserList: [Employee]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let dropDownMenu",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var taskArr: [Task]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let projectService",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let loadingVC",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var projectDetails: [String: Any?]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var createProjectFailWithError: String",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var addTaskFailWithError: String",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let taskEndDateLimiter",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let assignableTaskMinimumDayLimit",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupTextArea()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupTapGesture()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setUpDatePicker()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "startDatePicker(_ sender: UIDatePicker)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "loadUserAccount()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "handleTap(_ sender: UITapGestureRecognizer)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "selectEmployeeTapped(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "addTaskButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "createProjectButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "showDropDownMenu(sender: UIButton)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "addTask(completion: @escaping (AddTaskResult) -> Void)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "createProject(completion: @escaping (CreateProjectResult) -> Void)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "resetButtonTitles()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "resetTextFields()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "ProjectAddTaskDetailViewController",
  "superClass": 184,
  "extensions": [
    109,
    110
  ]
},{
  "id": 111,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMeetingsButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMainMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingEditDetailsSuccessfulViewController",
  "superClass": 184
},{
  "id": 112,
  "typeString": "class",
  "properties": [
    {
  "name": "var responseLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var response: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMainMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingEditEmployeeListSuccessViewController",
  "superClass": 184
},{
  "id": 113,
  "typeString": "class",
  "properties": [
    {
  "name": "var errorLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var errorMsg: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tryAgainButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMainMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingEditEmployeeListFailViewController",
  "superClass": 184
},{
  "id": 114,
  "typeString": "class",
  "properties": [
    {
  "name": "var invitedEmployeeListTableView: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var employeeList: [Employee]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let meetingInviteValidator",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meeting: Meeting?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectedEmployeeList: [Employee]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var originalInvitedEmployeeList: [Employee]?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var meetingDetails: [String: Any?]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var failWithError: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var response: String?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "loadData()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "saveChangesButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "discardButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "performDiscard()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "MeetingEditEmployeeListViewController",
  "superClass": 184,
  "extensions": [
    115
  ]
},{
  "id": 116,
  "typeString": "class",
  "properties": [
    {
  "name": "var meetingTitleTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingDescriptionTextView: UITextView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingStartTimePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingEndTimePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingDatePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meeting: Meeting?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isSave",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let styleTextView",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let styleTextField",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var meetingDetails: [String: Any?]",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "styleTextArea()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupMeetingDetails()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupMeetingDate()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "meetingStartTimePicker(_ sender: UIDatePicker)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "meetingDatePicker(_ sender: UIDatePicker)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "editInvitedEmployeesButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingEditDetailsViewController",
  "superClass": 184,
  "extensions": [
    117
  ]
},{
  "id": 118,
  "typeString": "class",
  "properties": [
    {
  "name": "var editMeetingListTableView: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingList: [Meeting]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectedMeeting: Meeting?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupMeetingList()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupTableView()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "progressBarCalculator(date: Date, startTime: Date) -> Float",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "mainMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingEditListViewController",
  "superClass": 184,
  "extensions": [
    119
  ]
},{
  "id": 120,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tryAgain(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMainMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingEditDetailsFailViewController",
  "superClass": 184
},{
  "id": 121,
  "typeString": "class",
  "properties": [
    {
  "name": "var meetingTitleTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingDescriptionTextView: UITextView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingDatePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingEndTimePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingStartTimePicker: UIDatePicker!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var inviteEmployeeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let textViewStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let textFieldStyle",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var meetingDetails: [String: Any?]",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "styleTextArea()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setupMeetingDate()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "meetingDatePicker(_ sender: UIDatePicker)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "meetingStartTimePicker(_ sender: UIDatePicker)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "inviteEmployeesButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "showAlert(title: String, message: String)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "MeetingScheduleViewController",
  "superClass": 184
},{
  "id": 122,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "createNewMeetingButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingCreateSuccessfulViewController",
  "superClass": 184
},{
  "id": 123,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tryAgainButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "backToMenu(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingCreateFailViewController",
  "superClass": 184
},{
  "id": 124,
  "typeString": "class",
  "properties": [
    {
  "name": "var employeeSearchBar: UISearchBar!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var employeeListTableView: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var employeeList: [Employee]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meeting: Meeting?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var failWithError: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let meetingInviteValidator",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectedEmployeeList: [Employee]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var filteredEmployeeList: [Employee]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isSearching: Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var meetingDetails: [String: Any?]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "createMeeting()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "sendMeetingInviteButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "discardButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "performDiscard()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "MeetingInviteEmployeeViewController",
  "superClass": 184,
  "extensions": [
    125,
    126
  ]
},{
  "id": 127,
  "typeString": "class",
  "properties": [
    {
  "name": "let activityIndicator",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let loadingLabel",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var reachability: Reachability?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setGradientBackground()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "LunchScreenViewController",
  "superClass": 184,
  "extensions": [
    128
  ]
},{
  "id": 129,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MainMenuViewController",
  "superClass": 184
},{
  "id": 130,
  "typeString": "class",
  "properties": [
    {
  "name": "var rememberMeButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var companyRegistrationNumberTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var loginPasswordTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var loginEmailTextField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var companyRegisterNumber: String?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var userAccount: Employee?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var userValidationService: UserValidationService?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var companyValidation: CompanyValidationService?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var loadingViewController: LoadingViewController?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let textFieldStyle",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "rememberMeTap(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupTextFields()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "loadRememberedData()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "saveRememberedData()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "login(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LoginViewController",
  "superClass": 184,
  "extensions": [
    131
  ]
},{
  "id": 132,
  "typeString": "class",
  "properties": [
    {
  "name": "let activityIndicator",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var databaseAction: (() -> Void)?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "performDatabaseAction()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "setDatabaseAction(_ action: @escaping () -> Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LoadingViewController",
  "superClass": 184
},{
  "id": 133,
  "typeString": "class",
  "properties": [
    {
  "name": "var employee: Employee?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var assignedTasks: [Task]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var selectedTask: Task?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var selectedProject: Project?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var taskListTableView: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "mainMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "loadData()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "EmployeeAssignedTaskListViewController",
  "superClass": 184,
  "extensions": [
    134
  ]
},{
  "id": 135,
  "typeString": "class",
  "properties": [
    {
  "name": "var projectTitleLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var projectDescriptionLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskTitleLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var taskDescriptionLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var assignedEmployeesLabel: UILabel!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var task: Task?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var project: Project?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "loadData()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "EmployeeAssignedTaskDetailViewController",
  "superClass": 184
},{
  "id": 136,
  "typeString": "class",
  "properties": [
    {
  "name": "var userAccount: Employee?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var company: Company? @objc",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "logoutButtonTapped()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "logout()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "EmployeeMainMenuViewController",
  "superClass": 184
},{
  "id": 137,
  "typeString": "class",
  "properties": [
    {
  "name": "var meetingListTableView: UITableView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var employee: Employee?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var meetingList: [Meeting]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var selectedMeeting: Meeting?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "mainMenuButton(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "loadData()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "EmployeeMeetingListViewController",
  "superClass": 184,
  "extensions": [
    138
  ]
},{
  "id": 139,
  "typeString": "struct",
  "properties": [
    {
  "name": "let createAccountToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let createAccountToFail",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "RegisterCompany"
},{
  "id": 140,
  "typeString": "struct",
  "properties": [
    {
  "name": "let loginToAdmin",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let loginToManager",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let loginToEmployee",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Login"
},{
  "id": 141,
  "typeString": "struct",
  "properties": [
    {
  "name": "let employeeMenuToTasks",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeeMenuToMeetings",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "MainMenu"
},{
  "id": 142,
  "typeString": "struct",
  "properties": [
    {
  "name": "let taskListToTaskDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let taskDetailToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let taskDetailToFail",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "AssignedTask"
},{
  "id": 143,
  "typeString": "struct",
  "properties": [
    {
  "name": "let meetingListToMeetingDetails",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Meeting"
},{
  "id": 144,
  "typeString": "struct",
  "properties": [
    {
  "name": "let employeeDateListToPerformanceGraph",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Employee",
  "containedEntities": [
    141,
    142,
    143
  ]
},{
  "id": 145,
  "typeString": "struct",
  "properties": [
    {
  "name": "let createAccountToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let createAccountToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editUserAccountToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editUserAccountToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let accountListToAccountEdit",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let mainMenuToCreateAccount",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let mainMenuToEditAccounts",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Admin"
},{
  "id": 146,
  "typeString": "struct",
  "properties": [
    {
  "name": "let managerMenuToCreateProject",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerViewToProjectList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerViewToScheduleMeeting",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerViewToMeetingList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerViewToEmployeePerformanceList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerMenuToCompletedTaskRequestList",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "MainMenu"
},{
  "id": 147,
  "typeString": "struct",
  "properties": [
    {
  "name": "let addTaskToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let addTaskToFail",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "CreateTask"
},{
  "id": 148,
  "typeString": "struct",
  "properties": [
    {
  "name": "let projectDetailsToTaskView",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let createProjectToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let createProjectToFail",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "CreateProject",
  "containedEntities": [
    147
  ]
},{
  "id": 149,
  "typeString": "struct",
  "properties": [
    {
  "name": "let taskListToEditTaskDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editTaskToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editTaskToSuccess",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "EditTask"
},{
  "id": 150,
  "typeString": "struct",
  "properties": [
    {
  "name": "let projectListToProjectDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let projectDetailSaveToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let projectDetailSaveToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editProjectDetailToTaskList",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "EditProject",
  "containedEntities": [
    149
  ]
},{
  "id": 151,
  "typeString": "struct",
  "properties": [
    {
  "name": "let projectDetailsToTaskView",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let createProjectToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let addTaskToFail",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Project",
  "containedEntities": [
    147,
    148,
    149,
    150
  ]
},{
  "id": 152,
  "typeString": "struct",
  "properties": [
    {
  "name": "let taskRequestToTaskDetail",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "CompleteTaskRequest"
},{
  "id": 153,
  "typeString": "struct",
  "properties": [
    {
  "name": "let meetingDetailsToEmployeeList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sendMeetingRequestToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sendMeetingRequestTotSuccess",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "ScheduleMeeting"
},{
  "id": 154,
  "typeString": "struct",
  "properties": [
    {
  "name": "let editDetailsToInviteEmployee",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editMeetingListToMeetingDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editInvitedEmployeeToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editInvitedEmployeeToSuccess",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "EditMeeting"
},{
  "id": 155,
  "typeString": "struct",
  "name": "Meeting",
  "containedEntities": [
    153,
    154
  ]
},{
  "id": 156,
  "typeString": "struct",
  "properties": [
    {
  "name": "let projectDetailSaveToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editProjectDetailToTaskList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let taskListToEditTaskDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editTaskToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editTaskToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeeListToPerformanceDate",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let performanceDateToPerformanceGraph",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Manager",
  "containedEntities": [
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155
  ]
},{
  "id": 157,
  "typeString": "struct",
  "properties": [
    {
  "name": "let taskListToTaskDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let taskDetailToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let taskDetailToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let meetingListToMeetingDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeeDateListToPerformanceGraph",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerMenuToCreateProject",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerViewToProjectList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerViewToScheduleMeeting",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerViewToMeetingList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let projectDetailSaveToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let projectDetailSaveToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editProjectDetailToTaskList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let taskListToEditTaskDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editTaskToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editTaskToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let taskRequestToTaskDetail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let meetingDetailsToEmployeeList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sendMeetingRequestToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sendMeetingRequestTotSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editDetailsToInviteEmployee",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editMeetingListToMeetingDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editInvitedEmployeeToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editInvitedEmployeeToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeeListToPerformanceDate",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let performanceDateToPerformanceGraph",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Segue",
  "containedEntities": [
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156
  ]
},{
  "id": 158,
  "typeString": "struct",
  "properties": [
    {
  "name": "let employeeTaskLisCellIdentifier",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeeMeetingListCellIdentifier",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeePerformanceDateListCellIdentifier",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Employee"
},{
  "id": 159,
  "typeString": "struct",
  "properties": [
    {
  "name": "let employeeListForPerformanceReportCellIdentifier",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeePerformanceDateCellIdentifier",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Manager"
},{
  "id": 160,
  "typeString": "struct",
  "properties": [
    {
  "name": "let userAccountTypeCellIdentifier",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeeListDropDownMenuForTaskCellIdentifier",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "DropDownMenu"
},{
  "id": 161,
  "typeString": "struct",
  "name": "TableCellIdentifier",
  "containedEntities": [
    158,
    159,
    160
  ]
},{
  "id": 162,
  "typeString": "struct",
  "properties": [
    {
  "name": "let passwordDoNotMatch",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let passwordFormatInvalid",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let passwordRequirments",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Password"
},{
  "id": 163,
  "typeString": "struct",
  "properties": [
    {
  "name": "let invalidEmailFormat",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let emailMatchFail",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Email"
},{
  "id": 164,
  "typeString": "struct",
  "properties": [
    {
  "name": "let userNamePassInvalid",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let companyRegisterNoInvalid",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let notConnected",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Login"
},{
  "id": 165,
  "typeString": "struct",
  "properties": [
    {
  "name": "let isAccountExist",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "CreateAccount"
},{
  "id": 166,
  "typeString": "struct",
  "properties": [
    {
  "name": "let textFieldCannotBeEmpty",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Warning",
  "containedEntities": [
    162,
    163,
    164,
    165
  ]
},{
  "id": 167,
  "typeString": "struct",
  "properties": [
    {
  "name": "let projectTitle",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let projectDescription",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let projectStartDate",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let projectEndDate",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "ProjectDetailsDictionary"
},{
  "id": 168,
  "typeString": "struct",
  "properties": [
    {
  "name": "let meetingTitle",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let meetindDescription",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let meetingDate",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let meetingStartTime",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let meetindEndTime",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let invitedEmployeeList",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "MeetingDetailsDictionary"
},{
  "id": 169,
  "typeString": "struct",
  "name": "Dictionary",
  "containedEntities": [
    167,
    168
  ]
},{
  "id": 170,
  "typeString": "struct",
  "properties": [
    {
  "name": "let employeeListCellIdentifier",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeeListCellNib",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let meetingListCellNib",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let meetingListCellIdentifier",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let projectListTableCellIdentifier",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let projectListCellNib",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "CustomCell"
},{
  "id": 171,
  "typeString": "struct",
  "properties": [
    {
  "name": "let taskDetailToSuccess",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let taskDetailToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let meetingListToMeetingDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeeDateListToPerformanceGraph",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerMenuToCreateProject",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerViewToProjectList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerViewToScheduleMeeting",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerViewToMeetatic",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let managerMenuToCom",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let projectListToProjectDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let projectDetailSaveToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let projectDetailSaveToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editProjectDetailToTaskList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let taskListToEditTaskDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editTaskToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editTaskToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let taskRequestToTaskDetail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let meetingDetailsToEmployeeList",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sendMeetingRequestToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let sendMeetingRequestTotSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editDetailsToInviteEmployee",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editMeetingListToMeetingDetails",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editInvitedEmployeeToFail",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let editInvitedEmployeeToSuccess",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let employeeListToPerformanceDate",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let performanceDateToPerformanceGraph",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Constant",
  "containedEntities": [
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170
  ]
},{
  "id": 173,
  "typeString": "class",
  "name": "XCTestCase"
},{
  "id": 174,
  "typeString": "class",
  "name": "UIResponder"
},{
  "id": 175,
  "typeString": "protocol",
  "name": "UIApplicationDelegate"
},{
  "id": 176,
  "typeString": "class",
  "name": "String"
},{
  "id": 177,
  "typeString": "protocol",
  "name": "CodingKey"
},{
  "id": 178,
  "typeString": "class",
  "name": "Hashable"
},{
  "id": 179,
  "typeString": "protocol",
  "name": "Codable"
},{
  "id": 180,
  "typeString": "class",
  "name": "Comparable"
},{
  "id": 181,
  "typeString": "class",
  "name": "whereTComparable"
},{
  "id": 182,
  "typeString": "class",
  "name": "UITableViewCell"
},{
  "id": 183,
  "typeString": "class",
  "name": "UITextView"
},{
  "id": 184,
  "typeString": "class",
  "name": "UIViewController"
},{
  "id": 185,
  "typeString": "class",
  "name": "UITableViewController"
},{
  "id": 186,
  "typeString": "protocol",
  "name": "UITextFieldDelegate"
},{
  "id": 187,
  "typeString": "protocol",
  "name": "UITableViewDelegate"
},{
  "id": 188,
  "typeString": "protocol",
  "name": "UITableViewDataSource"
},{
  "id": 189,
  "typeString": "protocol",
  "name": "UITextViewDelegate"
},{
  "id": 190,
  "typeString": "protocol",
  "name": "UISearchBarDelegate"
},{
  "id": 191,
  "typeString": "class",
  "name": "Array",
  "extensions": [
    172
  ]
},{
  "id": 14,
  "typeString": "extension",
  "methods": [
    {
  "name": "doPasswordsMatch(_ password: String, _ confirmPassword: String, confirmPasswordTextField: UITextField, confirmPasswordLabel: UILabel) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validateName(_ name: String, employeeNameTextField: UITextField, employeeNameLabel: UILabel ) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validateSurname(_ surname: String, employeeSurnameTextField: UITextField, employeeSurnameLabel: UILabel) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validateEmail(_ email: String, emailAddressTextField: UITextField, emailAddressLabel: UILabel) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "doEmailsMatch(_ email: String, _ confirmEmail: String, confirmEmailAddressTextField: UITextField, confirmEmailAddressLabel: UILabel) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "validatePassword(_ password: String, passwordTextField: UITextField, passwordLabel: UILabel) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "AccountValidator"
},{
  "id": 35,
  "typeString": "extension",
  "methods": [
    {
  "name": "changeName(newName: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeLastName(newLastName: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeEmail(newEmail: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changePassword(newPassword: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "changeUserAccountType(newUserAccountType: AccountTypes)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UserAccount"
},{
  "id": 69,
  "typeString": "extension",
  "methods": [
    {
  "name": "textFieldShouldReturn(_ textField: UITextField) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    186
  ],
  "extendedEntityName": "CreateCompanyAccountViewController"
},{
  "id": 70,
  "typeString": "extension",
  "methods": [
    {
  "name": "registerCompanyWithAdminAccount(completion: @escaping(AccountCreationResult) ->Void)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "CreateCompanyAccountViewController"
},{
  "id": 76,
  "typeString": "extension",
  "methods": [
    {
  "name": "textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "textFieldShouldReturn(_ textField: UITextField) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "clearTextFields()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "protocols": [
    186
  ],
  "extendedEntityName": "CreateUserAccountViewController"
},{
  "id": 77,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    187,
    188
  ],
  "extendedEntityName": "CreateUserAccountViewController"
},{
  "id": 79,
  "typeString": "extension",
  "methods": [
    {
  "name": "textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    186
  ],
  "extendedEntityName": "EditUserAccountDetailsViewController"
},{
  "id": 80,
  "typeString": "extension",
  "methods": [
    {
  "name": "editUserAccountChanges(completion: @escaping(EditAccountResult) -> Void)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "updateUserData(userAccount: any UserAccount, password: String, email: String, name: String, lastName: String, accountType: AccountTypes)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "EditUserAccountDetailsViewController"
},{
  "id": 81,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    187,
    188
  ],
  "extendedEntityName": "EditUserAccountDetailsViewController"
},{
  "id": 85,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "deleteUserAccount(tableView: UITableView, at indexPath: IndexPath, userAccount: any UserAccount)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, editingStyleForRowAt indexPath: IndexPath) -> UITableViewCell.EditingStyle",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    187,
    188
  ],
  "extendedEntityName": "EditUserAccountListViewController"
},{
  "id": 90,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "userExistAlert()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "employeeIsNotAvailableAlert(message: String)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "protocols": [
    187,
    188
  ],
  "extendedEntityName": "ProjectEditTaskDetailViewController"
},{
  "id": 91,
  "typeString": "extension",
  "methods": [
    {
  "name": "editTask(completion: @escaping (AddTaskResult) -> Void)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "ProjectEditTaskDetailViewController"
},{
  "id": 93,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    187,
    188
  ],
  "extendedEntityName": "ProjectEditTaskListViewController"
},{
  "id": 96,
  "typeString": "extension",
  "methods": [
    {
  "name": "editProjectDetails(completion: @escaping (EditProjectResult) -> Void)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "ProjectDetailsEditViewController"
},{
  "id": 99,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    187,
    188
  ],
  "extendedEntityName": "ProjectListEdit"
},{
  "id": 103,
  "typeString": "extension",
  "methods": [
    {
  "name": "textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "textFieldDidEndEditing(_ textField: UITextField)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "textViewDidChange(_ textView: UITextView)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "textFieldShouldReturn(_ textField: UITextField) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateProjectTaskButtonState()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "protocols": [
    186,
    189
  ],
  "extendedEntityName": "ProjectDetailsViewController"
},{
  "id": 109,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "userExistAlert()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "employeeIsNotAvailableAlert(message: String)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "protocols": [
    187,
    188
  ],
  "extendedEntityName": "ProjectAddTaskDetailViewController"
},{
  "id": 110,
  "typeString": "extension",
  "methods": [
    {
  "name": "textFieldDidBeginEditing(_ textField: UITextField)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "textFieldShouldReturn(_ textField: UITextField) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    186
  ],
  "extendedEntityName": "ProjectAddTaskDetailViewController"
},{
  "id": 115,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "showAlert(_ error: String)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "protocols": [
    187,
    188
  ],
  "extendedEntityName": "MeetingEditEmployeeListViewController"
},{
  "id": 117,
  "typeString": "extension",
  "methods": [
    {
  "name": "showAlert(title: String, message: String)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "MeetingEditDetailsViewController"
},{
  "id": 119,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "prepare(for segue: UIStoryboardSegue, sender: Any?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    187,
    188
  ],
  "extendedEntityName": "MeetingEditListViewController"
},{
  "id": 125,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "showAlert(_ error: String)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "MeetingInviteEmployeeViewController"
},{
  "id": 126,
  "typeString": "extension",
  "methods": [
    {
  "name": "searchBar(_ searchBar: UISearchBar, textDidChange searchText: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "searchBar(_ searchBar: UISearchBar, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "filterEmployeeList(with searchText: String)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "protocols": [
    190
  ],
  "extendedEntityName": "MeetingInviteEmployeeViewController"
},{
  "id": 128,
  "typeString": "extension",
  "methods": [
    {
  "name": "checkInternetConnection()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "LunchScreenViewController"
},{
  "id": 131,
  "typeString": "extension",
  "methods": [
    {
  "name": "presentAlert(message: String)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "isCompany(registerNo: String, completion: @escaping (Company?) -> Void)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "LoginViewController"
},{
  "id": 134,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "progressBarCaculator(startDate: Date, endDate: Date) -> Float",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "sendTaskCompletionRequest(_ task: Task)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "alert(title: String, message: String)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "protocols": [
    187,
    188
  ],
  "extendedEntityName": "EmployeeAssignedTaskListViewController"
},{
  "id": 138,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "progressBarCalculator(date: Date, startTime: Date) -> Float",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "protocols": [
    187,
    188
  ],
  "extendedEntityName": "EmployeeMeetingListViewController"
},{
  "id": 172,
  "typeString": "extension",
  "methods": [
    {
  "name": "binarySearch(for element: Element) -> Int?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "Array"
}] 