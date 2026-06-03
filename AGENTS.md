# AGENTS.md

## Project Context
- This project repository handles the web development and content management for the Lembaga Pemeriksa Halal Universitas Sriwijaya (LPH Universitas Sriwijaya).
- When updating or verifying content, refer to the file named "Isian Web LPH Universitas Sriwijaya.docx" verbatim.
- The agency's establishment must reference Surat Keputusan Rektor Universitas Sriwijaya Nomor 0012/UN9.BPU/SK.BPU4/2026.
- The primary mission statement integrated into the site must reflect a commitment to providing professional, independent, objective, and high-integrity halal inspection services.

## Data Models & Organization Structure
- Ensure database schemas and UI organizational charts structure the reporting lines so that the Manajer Mutu and Manajer Administrasi dan Pemasaran report to the Kepala LPH.
- Ensure the data models reflect that the Kepala LPH reports to the Badan Pengelola Usaha (BPU) Universitas Sriwijaya.
- The Badan Pengelola Usaha Universitas Sriwijaya must report to the Rektor Universitas Sriwijaya.
- The "Tim auditor halal" module must be populated with the following personnel: Dr. Zainal Fanani, S.Si., M.Si., Prof. Hermansyah, S.Si., M.Si., Ph.D., and Dr. Ir. Anny Yanuriati, M.Appl., Sc..
- Web sections detailing laboratory capabilities must explicitly state the collaboration with Laboratorium Kimia Analisa Instrumentasi dan Pengujian (LKAIP) Universitas Sriwijaya.

## Services & Scope Implementation
- The services module (`/layanan`) must list three specific services: Pemeriksaan halal makanan & minuman, obat dan kosmetik; Pendampingan SJPH; and Konsultasi sertifikasi halal.
- Any search, filter, or categorization tags for the inspection scope (`/ruang-lingkup`) must be restricted to three categories: Makanan & minuman, obat, and Kosmetika.
- When rendering the user journey or workflow logic for the certification process, ensure it maps to the 10-step "Alur Sertifikasi Halal". 
- When a user presses or interacts with a "daftar sertifikasi" element, trigger a redirect to `https://ptsp.halal.go.id`.

## Footer & Contact Configurations
- All contact pages and footers must display the mandatory address format: Jln. Srijaya Negara, Gedung Kantor Pusat Administrasi, Bukit Besar, Ilir Barat I Kota Palembang Sumatera Selatan (30139).
- Alternatively, for the broader location context, use: Jalan Srijaya Negara, Gedung Kantor Pusat Administrasi Universitas Sriwijaya, Bukit Besar, Kecamatan Ilir Barat I, Kota Palembang, Provinsi Sumatera Selatan.
- Use the following Google Maps URL for embedded map iframes or external links: https://maps.app.goo.gl/xWVZBxWLzJ16XYqZA
- Configure `mailto:` links to the official email: lphunsri13@gmail.com.
- All social media icons and routing must direct to the handle: lph.unsri.