import {Temporal} from "@js-temporal/polyfill";

export interface Course {
    readonly id: string;
    title: string;
    capacity: number;
    startDate?: Temporal.PlainDate;
}

export type courseStatus = 
 | {
    status: "DRAFT";
    createdBy: string;
    createdAt: Temporal.Instant;
 }
 | {
    status: "PUBLISHED";
    publishedAt: Temporal.Instant;
    syllabus: string;
 }
 | {
    status: "ACTIVE";
    enrolledCount: number;
    startDate: Temporal.PlainDate;
 }
 | {
    status: "ARCHIVED";
    archivedAt: Temporal.Instant;
    finalEnrollmentCount: number;
 }
 | {
    status: "CANCELED";
    reason: string;
    canceledAt: Temporal.Instant;
 };

 export function describeCourseStatus(status: courseStatus): string {
    switch(status.status) {
        case "DRAFT":
            return `Draft created by ${status.createdBy}`;

        case "PUBLISHED":
            return `Published with syllabus: ${status.syllabus}`;

        case "ACTIVE":
            return `Active with ${status.enrolledCount} students since ${status.startDate}`;

        case "ARCHIVED":
            return `Archived with ${status.finalEnrollmentCount} final enrollments`;

        case "CANCELED":
            return `Cancelled: ${status.reason}`;

        default: {
            const _check: never = status;
            throw new Error(`Unhandled course status: ${JSON.stringify(_check)}`);
        }
    }
 }