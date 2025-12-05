import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrl',
  standalone: true
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css']
})
export class TeamSectionComponent {
  teamContent = {
    title: 'Nuestro Equipo',
    videos: {
      product: {
        url: 'https://youtu.be/M2e-DcECPmU',
        title: 'About the Product'
      },
      team: {
        url: 'https://youtu.be/u_KxmuH0L8o',
        title: 'About the Team'
      }
    }
  };

  getVideoId(url: string): string {
    // Extrae el ID del video de URLs de YouTube o URLs acortadas
    let videoId = '';

    // Para URLs tipo youtu.be/ID
    const youtubeShortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (youtubeShortMatch) {
      videoId = youtubeShortMatch[1];
    }

    // Para URLs tipo youtube.com/watch?v=ID
    const youtubeLongMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (youtubeLongMatch) {
      videoId = youtubeLongMatch[1];
    }

    // Para URLs tipo youtube.com/embed/ID
    const youtubeEmbedMatch = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
    if (youtubeEmbedMatch) {
      videoId = youtubeEmbedMatch[1];
    }

    // Para las URLs acortadas, usa los IDs reales de YouTube
    if (url.includes('bit.ly/3JQlY8M')) {
      videoId = 'Hmy3JFJbA04'; // ID real del video About the Product
    }
    if (url.includes('acortarurl.es/FAsnj0')) {
      videoId = '4sR2gBhQhX8'; // ID real del video About the Team
    }

    return videoId;
  }

  getEmbedUrl(url: string): string {
    const videoId = this.getVideoId(url);
    // Parámetros: autoplay=1 (reproducción automática), mute=1 (muteado), loop=1 (loop), playlist=ID (necesario para loop)
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1`;
  }
}
