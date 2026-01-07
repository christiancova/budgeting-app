/**
 * Settings Page
 * 
 * Placeholder page for user and app settings.
 * Later this will include account settings, preferences, and connected bank accounts.
 */

import DashboardShell from "@/components/DashboardShell";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="glass-container p-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Settings</h1>
        <p className="text-gray-600">
          This page will contain user settings, preferences, and bank account connections.
        </p>
      </div>
    </DashboardShell>
  );
}



