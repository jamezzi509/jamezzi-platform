import { PaidCourseRouteGuard } from "@/components/academy/paid-course-route-guard";

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PaidCourseRouteGuard>{children}</PaidCourseRouteGuard>;
}
