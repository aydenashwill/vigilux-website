// pages/api/brief.js
import PDFDocument from "pdfkit";

export default function handler(req, res) {
  const doc = new PDFDocument({ size: "LETTER", margin: 54 });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    'inline; filename="Vigilux_Phoenix_Overwatch_Brief.pdf"'
  );

  doc.pipe(res);

  // --------- Header ----------
  doc.fontSize(20).text("VIGILUX", { align: "left" });
  doc.moveDown(0.2);
  doc
    .fontSize(12)
    .fillColor("#444444")
    .text("Phoenix Overwatch — Capability Brief", { align: "left" });
  doc.moveDown(0.2);
  doc.fillColor("#000000");
  doc
    .fontSize(10)
    .text("Developmental information. Specifications subject to change.", {
      align: "left",
    });

  doc.moveDown(1);
  doc.moveTo(doc.page.margins.left, doc.y).lineTo(560, doc.y).stroke();
  doc.moveDown(1);

  // --------- Executive Summary ----------
  doc.fontSize(14).text("Executive Summary", { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(11).text(
    "Phoenix Overwatch is a low-SWaP thermal relay payload concept for small UAS platforms. " +
      "It prioritizes integration discipline, repeatable demo readiness, and production credibility " +
      "through controlled interfaces, measured performance targets, and acceptance testing.",
    { lineGap: 3 }
  );

  doc.moveDown(1);

  // --------- Intended Use ----------
  doc.fontSize(14).text("Intended Use", { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(11).list(
    [
      "Thermal/EO viewing and relay for small UAS and constrained platforms",
      "Operator-centered ground workflow for viewing + recording",
      "Rapid integration path with standardized mounting + harness approach",
    ],
    { bulletRadius: 2, textIndent: 18, lineGap: 3 }
  );

  doc.moveDown(1);

  // --------- Core Capabilities ----------
  doc.fontSize(14).text("Core Capabilities", { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(11).list(
    [
      "Analog CVBS baseline video path for broad compatibility (FPV receivers/monitors/goggles/DVR)",
      "Optional digital IP video path as the program matures (H.264/H.265 over RTSP/WebRTC where appropriate)",
      "Operator-controlled workflows (viewing, recording, bookmarking as follow-on)",
      "Production credibility focus: controlled BOM, traveler, per-unit acceptance checklist, traceability",
    ],
    { bulletRadius: 2, textIndent: 18, lineGap: 3 }
  );

  doc.moveDown(1);

  // --------- AI-Enhanced Preview ----------
  doc.fontSize(14).text("AI-Enhanced Capabilities (Preview)", { underline: true });
  doc.moveDown(0.5);
  doc
    .fontSize(11)
    .text(
      "Optional operator-assisted analytics under development. Release is gated by validation and measured performance targets.",
      { lineGap: 3 }
    );
  doc.moveDown(0.5);
  doc.fontSize(11).list(
    [
      "Supervised tracking support and stabilization assistance",
      "Reacquisition assistance for temporary target loss",
      "Operator-assisted overlays (gated by test results and accuracy thresholds)",
    ],
    { bulletRadius: 2, textIndent: 18, lineGap: 3 }
  );

  doc.moveDown(1);

  // --------- Validation Plan ----------
  doc.fontSize(14).text("Validation Plan (Measured)", { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(11).list(
    [
      "Range testing with repeatable route + environmental logging",
      "Dropout rate and reacquisition time measurement",
      "Latency and bitrate characterization (per video path)",
      "Power stability testing (brownout, transient, reverse polarity protection)",
      "Per-unit acceptance checklist (functional, video, power stability, thermal check, link check)",
    ],
    { bulletRadius: 2, textIndent: 18, lineGap: 3 }
  );

  doc.moveDown(1);

  // --------- Security Posture ----------
  doc.fontSize(14).text("Security Posture (Phased)", { underline: true });
  doc.moveDown(0.5);

  doc.fontSize(11).list(
    [
      "v1: Baseline hardening with transport-layer encryption options for IP paths (when used).",
      "v2 Secure/Enterprise: Integration with validated/customer radios and documented key workflows (generate/load/rotate/zeroize) aligned to customer requirements.",
    ],
    { bulletRadius: 2, textIndent: 18, lineGap: 3 }
  );

  doc.moveDown(1);

  // --------- Footer ----------
  doc.moveTo(doc.page.margins.left, doc.y).lineTo(560, doc.y).stroke();
  doc.moveDown(0.8);

  doc
    .fontSize(9)
    .fillColor("#444444")
    .text(
      "Vigilux — “The light that never sleeps.”  |  Contact: aydenashwill@vigilux.co",
      { align: "left" }
    );

  doc.end();
}
