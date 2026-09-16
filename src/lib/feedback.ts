import { ProjectFeedback, FeedbackStatus } from "./types";

export interface FeedbackStore {
  submit(data: {
    projectId: string;
    name: string;
    email?: string;
    comment: string;
  }): ProjectFeedback;
  getByProject(projectId: string): ProjectFeedback[];
  getAll(): ProjectFeedback[];
  updateStatus(id: string, status: FeedbackStatus): ProjectFeedback | null;
}

export class InMemoryFeedbackStore implements FeedbackStore {
  private feedbacks: ProjectFeedback[] = [];

  submit(data: {
    projectId: string;
    name: string;
    email?: string;
    comment: string;
  }): ProjectFeedback {
    const feedback: ProjectFeedback = {
      id: crypto.randomUUID(),
      projectId: data.projectId,
      name: data.name,
      email: data.email,
      comment: data.comment,
      status: "pending",
      createdAt: new Date(),
    };
    this.feedbacks.push(feedback);
    return feedback;
  }

  getByProject(projectId: string): ProjectFeedback[] {
    return this.feedbacks.filter(
      (f) => f.projectId === projectId && f.status === "approved"
    );
  }

  getAll(): ProjectFeedback[] {
    return [...this.feedbacks];
  }

  updateStatus(id: string, status: FeedbackStatus): ProjectFeedback | null {
    const feedback = this.feedbacks.find((f) => f.id === id);
    if (feedback) {
      feedback.status = status;
      return feedback;
    }
    return null;
  }
}
