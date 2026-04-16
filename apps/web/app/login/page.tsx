import { Input } from "@repo/ui/input";
import ServerButton from "@repo/ui/server-button";
import { Alert } from "@repo/ui/alert";
import { login, signup } from "./actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { error?: string };
}) {
  const error = searchParams?.error;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">AccessFlow</h1>
          <p className="text-sm text-gray-500 mt-2">Accedi o crea un account</p>
        </div>

        {error && (
          <div className="mb-4">
            <Alert variant="error">{decodeURIComponent(String(error))}</Alert>
          </div>
        )}

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tu@ente.it"
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
            />
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <ServerButton
              formAction={login}
              className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors"
              type="submit">
              Accedi
            </ServerButton>
            <ServerButton
              formAction={signup}
              className="w-full px-4 py-2 text-blue-600 bg-white border border-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors"
              type="submit">
              Registrati
            </ServerButton>
          </div>
        </form>
      </div>
    </div>
  );
}
