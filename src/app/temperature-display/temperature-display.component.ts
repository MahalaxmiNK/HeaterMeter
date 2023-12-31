import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-temperature-display',
  templateUrl: './temperature-display.component.html',
  styleUrls: ['./temperature-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureDisplayComponent implements AfterViewInit{
  @ViewChild('myCanvas', { static: false })
  myCanvas!: ElementRef<HTMLCanvasElement>;  
  @Input()
  minTemperature!: number;
  @Input()
  maxTemperature!: number;
  @Input()
  targetTemperature!: number;
  constructor(private renderer: Renderer2) {}
  
  
  calculateLineRotation() {
    const range = this.maxTemperature - this.minTemperature;
    const angle = (((this.targetTemperature || 0) * 300) / range) + 120;
    console.log(angle)
    return angle;
  }

  ngAfterViewInit() {
    this.drawDynamicRadius(this.calculateLineRotation());
  }

  drawDynamicRadius(angle: number): void {
    const canvas = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    if (!context) {
      console.error('Canvas context is null.');
      return;
    }
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10; // 10 is a margin from the canvas edge

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the circle
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.stroke();

    // Draw the dynamic radius
    const angleInRadians = (angle * Math.PI) / 180;
    const endX = centerX + radius * Math.cos(angleInRadians);
    const endY = centerY + radius * Math.sin(angleInRadians);

    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(endX, endY);
    context.stroke();
  }
}
