import Container from '@/components/ui/container';

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Arek</div>
          <nav className="flex gap-4 text-sm text-gray-600">
            <a>Features</a>
            <a>Pricing</a>
            <a>Integrations</a>
            <a>Resources</a>
            <a>Contact</a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
