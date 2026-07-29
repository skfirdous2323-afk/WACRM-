import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="flex flex-col items-center">
          {/* লোগো */}
          <div className="mb-4 h-20 w-20 relative">
            <Image
              src="/logo.png"
              alt="ZIVEXO CRM"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-indigo-600">ZIVEXO CRM</h1>
          <p className="mt-2 text-sm text-gray-500">Smarter CRM. Stronger Relationships.</p>
          <div className="mt-8 flex w-full flex-col gap-3">
            <Link
              href="/dashboard"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-center text-white hover:bg-indigo-700 transition"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
