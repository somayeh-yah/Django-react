import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import MainWrapper from "./layouts/MainWrapper";
import PrivateRoute from "./layouts/PrivateRoute";
import Register from "./views/auth/Register.jsx";
import Login from "./views/auth/Login.jsx";
import ForgotPassword from "./views/auth/ForgotPassword.jsx";
import CreateNewPassword from "./views/auth/CreateNewPassword.jsx";
import Index from "./views/base/Index.jsx";
import BaseDashboard from "./views/base/Dashboard.jsx";
import KpiDetailView from "./views/base/KpiDetailView.jsx";
import GoalAndVisions from "./views/base/GoalAndVisions.jsx";
import Profile from "./views/student/Profile.jsx";
import StudentDashboard from "./views/student/Dashboard.jsx";
import Courses from "./views/student/Courses.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* MainWrapper checks if user has been authenticated */}
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />

          {/* STUDENT */}
          <Route
            path="/student/dashboard"
            element={
              <PrivateRoute role="student">
                <StudentDashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/student/courses"
            element={
              <PrivateRoute role="student">
                <Courses />
              </PrivateRoute>
            }
          />
          <Route
            path="/kpi/:kpiId"
            element={
              <PrivateRoute>
                <KpiDetailView />
              </PrivateRoute>
            }
          />
          <Route
            path="/kpi/:kpiId/sub/:subId"
            element={
              <PrivateRoute>
                <KpiDetailView />
              </PrivateRoute>
            }
          />
          <Route
            path="/kpi/new"
            element={
              <PrivateRoute>
                <GoalAndVisions />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <BaseDashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
