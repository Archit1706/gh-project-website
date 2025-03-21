import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Project Not Found
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        The project you&apos;re looking for doesn&apos;t exist or has been removed.
                    </p>
                </div>
                <div>
                    <Link
                        href="/"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    )
} 