import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">AccessFlow</h1>
          <p className="text-sm text-gray-500 mt-2">Accedi o crea un account</p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@ente.it"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <button
              formAction={login}
              className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors">
              Accedi
            </button>
            <button
              formAction={signup}
              className="w-full px-4 py-2 text-blue-600 bg-white border border-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors">
              Registrati
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
