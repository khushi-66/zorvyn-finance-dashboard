
export default function Footer() {
  return (
    <footer
      className="text-white mt-5"
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      }}
    >
      <div className="container py-4">

        
        <div className="row text-center text-md-start align-items-center">

          
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h5 className="mb-1">Finance Dashboard</h5>
            <p className="mb-0 small">
              Visualize. Analyze. Grow.
            </p>
          </div>

          
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end gap-3">

            <a
              href="https://github.com/khushi-66"
              target="_blank"
              rel="noreferrer"
              className="text-white footer-icon"
            >
              <i className="bi bi-github fs-4"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/khushi-sahu989718b"
              target="_blank"
              rel="noreferrer"
              className="text-white footer-icon"
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>

            <a
              href="mailto:sahujii8277@gmail.com"
              className="text-white footer-icon"
            >
              <i className="bi bi-envelope-fill fs-4"></i>
            </a>

          </div>
        </div>

        
        <hr className="border-light my-3" />

        
        <div className="text-center small">
          © 2026 Built by <strong>Khushi Sahu</strong> • All rights reserved
        </div>

      </div>
    </footer>
  );
}