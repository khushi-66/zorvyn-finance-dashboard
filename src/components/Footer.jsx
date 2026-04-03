
export default function Footer() {
  return (
    <footer 
      className="text-white mt-5"
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      }}
    >
      <div className="container py-4">

        {/* Top Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

          {/* Left */}
          <div>
            <h5 className="mb-1">Finance Dashboard</h5>
            <p className="mb-0" style={{ fontSize: "14px" }}>
              Visualize. Analyze. Grow.
            </p>
          </div>

          {/* Right Icons */}
          <div className="d-flex gap-3 mt-3 mt-md-0">

            <a 
              href="https://github.com/khushi-66" 
              target="_blank" 
              rel="noreferrer"
              className="text-white"
            >
              <i className="bi bi-github fs-4"></i>
            </a>

            <a 
              href="https://www.linkedin.com/in/khushi-sahu989718b" 
              target="_blank" 
              rel="noreferrer"
              className="text-white"
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>

            <a 
              href="mailto:sahujii8277@gmail.com" 
              className="text-white"
            >
              <i className="bi bi-envelope-fill fs-4"></i>
            </a>

          </div>
        </div>

        
        <hr className="border-light my-3" />

       
        <div className="text-center" style={{ fontSize: "13px" }}>
          © 2026 Built by <strong>Khushi Sahu</strong> • All rights reserved
        </div>

      </div>
    </footer>
  );
}