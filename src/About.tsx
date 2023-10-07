const About = () => {
  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <div className="flex">
        <div className="flex-grow">
          <p>
            Hello, I'm a recent grad from The University of Western Australia (UWA) with an interest in Cloud, IoT and ML.
          </p>
        </div>
        <div className="flex-shrink-0 ml-4 w-40 md:w-64">
          <img 
            src="portrait-min.jpg" 
            alt="Your Portrait" 
            className="shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
