
import { Link } from "react-router";
const Admin = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
                {/* Sidebar */}
                <aside className="w-full md:w-64 bg-white shadow-md">
                    <div className="p-6 text-center border-b">
                        <h1 className="text-2xl font-bold text-sky-600">Admin Panel</h1>
                    </div>
                    <nav className="p-6 space-y-4">
                        <Link
                            to="/dashboard"
                            className="flex items-center text-gray-700 hover:text-sky-500 transition-colors"
                        >
                            <span className="icon mr-2">📊</span> Dashboard
                        </Link>
                        <Link
                            to="/users"
                            className="flex items-center text-gray-700 hover:text-sky-500 transition-colors"
                        >
                            <span className="icon mr-2">👥</span> Users
                        </Link>
                        <Link
                            to="/events"
                            className="flex items-center text-gray-700 hover:text-sky-500 transition-colors"
                        >
                            <span className="icon mr-2">📅</span> Events
                        </Link>
                        <Link
                            to="/bookings"
                            className="flex items-center text-gray-700 hover:text-sky-500 transition-colors"
                        >
                            <span className="icon mr-2">📝</span> Bookings
                        </Link>
                        <Link
                            to="/settings"
                            className="flex items-center text-gray-700 hover:text-sky-500 transition-colors"
                        >
                            <span className="icon mr-2">⚙️</span> Settings
                        </Link>
                    </nav>
                </aside>

                {/* Main content */}
                <main className="flex-1 p-6">
                    <div className="text-2xl font-semibold text-gray-800 mb-4">Welcome, Admin!</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Example Cards */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-lg font-medium text-gray-700 mb-2">Total Users</h2>
                            <p className="text-3xl font-bold text-sky-600">124</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-lg font-medium text-gray-700 mb-2">Total Events</h2>
                            <p className="text-3xl font-bold text-sky-600">32</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-lg font-medium text-gray-700 mb-2">Bookings Today</h2>
                            <p className="text-3xl font-bold text-sky-600">10</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Admin;