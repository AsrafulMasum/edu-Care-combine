import Container from "../../Layout/Container";

const Features = () => {
  return (
    <div className="bg-white py-20">
      <Container>
        <div className="text-center mb-10 space-y-4">
          <p className="tracking-widest font-bold text-primary-color">
            OUR FEATURES
          </p>
          <h2 className="text-4xl text-secondary-color font-semibold">
            Features that is applied
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Assignment Creation
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Highlight the ability for teachers to create, customize, and
                publish assignments quickly and easily.
              </p>
            </div>
          </div>

          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Deadline Management
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Emphasize the automatic deadline notifications and reminders
                that help users stay organized and on track.
              </p>
            </div>
          </div>

          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Submission Tracking
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Showcase the feature that allows students to submit their
                assignments online and track their submission history.
              </p>
            </div>
          </div>

          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Grading and Feedback
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Feature the grading system that enables teachers to efficiently
                assess and provide feedback on assignments.
              </p>
            </div>
          </div>

          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mobile Compatibility
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Show that your platform is accessible on various devices,
                including smartphones and tablets.
              </p>
            </div>
          </div>

          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Role-Based Access
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Explain how the role-based access control ensures that each user
                sees what&#39;s relevant to them.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
