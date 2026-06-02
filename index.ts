import { EnrollmentStatus, describeEnrollment } from "./models/enrollment.model";
import { Temporal } from "@js-temporal/polyfill";
import { courseStatus, describeCourseStatus } from "./models/course.model";

const pending: EnrollmentStatus = {
    status: "PENDING",
    requestedAt: Temporal.Now.instant(),
    studentId: "STU-001",
    courseCode: "CRS-101" 
};

const active: EnrollmentStatus = {
    status: "ACTIVE",
    startDate: Temporal.PlainDate.from("2026-09-01"),
    // currentGrade: 88
};

const approved: EnrollmentStatus = {
    status: "APPROVED",
    approvedBy: "Admin-001",
    approvedAt: Temporal.Now.instant()
};

const completed: EnrollmentStatus = {
    status: "COMPLETED",
    finalGrade: 94,
    completedAt: Temporal.Now.instant()
}

const dropped: EnrollmentStatus = {
    status: "DROPPED",
    reason: "Student requested withdrawal",
    droppedAt: Temporal.Now.instant()
}

const webDev: courseStatus = {
    status: "ACTIVE",
    enrolledCount: 28,
    startDate: Temporal.PlainDate.from("2026-09-01")
};

console.log(describeCourseStatus(webDev));

// console.log(describeEnrollment(pending));
// console.log(describeEnrollment(approved));
// console.log(describeEnrollment(active));
// console.log(describeEnrollment(completed));
// console.log(describeEnrollment(dropped));

