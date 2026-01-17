import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface PageSeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://improveclinic.it';
  private defaultImage = `${this.baseUrl}/og-image.jpg`;

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  setSeoData(config: PageSeoConfig): void {
    // Set Title
    this.titleService.setTitle(`${config.title} | Improve Clinic Rovereto`);

    // Set Meta Description
    this.metaService.updateTag({
      name: 'description',
      content: config.description
    });

    // Set Meta Keywords
    if (config.keywords) {
      this.metaService.updateTag({
        name: 'keywords',
        content: config.keywords
      });
    }

    // Set Canonical URL
    const url = config.url || `${this.baseUrl}${this.getCurrentPath()}`;
    this.metaService.updateTag({
      rel: 'canonical',
      href: url
    });

    // Open Graph Tags
    this.metaService.updateTag({
      property: 'og:title',
      content: `${config.title} | Improve Clinic Rovereto`
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: config.description
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: url
    });

    const ogImage = config.image || this.defaultImage;
    this.metaService.updateTag({
      property: 'og:image',
      content: ogImage
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: config.type || 'website'
    });

    // Twitter Card Tags
    this.metaService.updateTag({
      name: 'twitter:title',
      content: `${config.title} | Improve Clinic Rovereto`
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: config.description
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: ogImage
    });

    // Author
    if (config.author) {
      this.metaService.updateTag({
        name: 'author',
        content: config.author
      });
    }
  }

  setSeoDataWithStructuredData(
    config: PageSeoConfig,
    structuredData: any
  ): void {
    this.setSeoData(config);

    // Add Structured Data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  private getCurrentPath(): string {
    return window.location.pathname;
  }

  // Organization Structured Data
  getOrganizationSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Improve Clinic Rovereto',
      description: 'Centro di fisioterapia e riabilitazione professionale',
      url: this.baseUrl,
      telephone: '+393409203426',
      email: 'info@improveclinic.it',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via del Garda 46, Rovereto (TN)', 
        addressLocality: 'Rovereto',
        addressRegion: 'TN',
        postalCode: '38068',
        addressCountry: 'IT'
      },
      areaServed: 'Rovereto, Trento, Veneto',
      image: this.defaultImage,
      priceRange: '€€',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '19:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '13:00'
        }
      ]
    };
  }

  // Service Schema
  getServiceSchema(serviceName: string, description: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description: description,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Improve Clinic Rovereto',
        url: this.baseUrl
      },
      areaServed: 'IT',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: this.baseUrl
      }
    };
  }

  // Professional Schema
  getProfessionalSchema(
    name: string,
    title: string,
    description: string,
    image?: string
  ) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: name,
      jobTitle: title,
      description: description,
      image: image || this.defaultImage,
      url: this.baseUrl,
      affiliation: {
        '@type': 'Organization',
        name: 'Improve Clinic Rovereto'
      }
    };
  }

  // Breadcrumb Schema
  getBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }
}
