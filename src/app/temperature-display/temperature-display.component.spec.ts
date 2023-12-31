import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureDisplayComponent } from './temperature-display.component';
import { ChangeDetectionStrategy, ElementRef, Renderer2, ViewChild } from '@angular/core';

describe('TemperatureDisplayComponent', () => {
  let component: TemperatureDisplayComponent;
  let fixture: ComponentFixture<TemperatureDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureDisplayComponent],
    });

    fixture = TestBed.createComponent(TemperatureDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate line rotation angle correctly', () => {
    component.minTemperature = 0;
    component.maxTemperature = 100;
    component.targetTemperature = 50;
  
    fixture.detectChanges();
  
    const angle = component.calculateLineRotation();
  
    expect(angle).toBe(240);
  });

  it('should draw dynamic radius on ngAfterViewInit', () => {
    const drawDynamicRadiusSpy = spyOn(component, 'drawDynamicRadius');

    component.ngAfterViewInit();

    expect(drawDynamicRadiusSpy).toHaveBeenCalledOnceWith(240);
  });

  it('should draw dynamic radius correctly', () => {
    const canvasMock = { nativeElement: document.createElement('canvas') } as ElementRef<HTMLCanvasElement>;
    component.myCanvas = canvasMock;
    const contextMock = jasmine.createSpyObj('CanvasRenderingContext2D', ['beginPath', 'arc', 'stroke', 'moveTo', 'lineTo', 'clearRect']);
    canvasMock.nativeElement.getContext = jasmine.createSpy('getContext').and.returnValue(contextMock);

    component.drawDynamicRadius(240);

    expect(contextMock.clearRect).toHaveBeenCalledOnceWith(0, 0, canvasMock.nativeElement.width, canvasMock.nativeElement.height);
    expect(contextMock.beginPath).toHaveBeenCalledTimes(2);
    expect(contextMock.arc).toHaveBeenCalledOnceWith(canvasMock.nativeElement.width / 2, canvasMock.nativeElement.height / 2, Math.min(canvasMock.nativeElement.width / 2, canvasMock.nativeElement.height / 2) - 10, 0, 2 * Math.PI);
    expect(contextMock.stroke).toHaveBeenCalledTimes(1);
    expect(contextMock.moveTo).toHaveBeenCalledOnceWith(canvasMock.nativeElement.width / 2, canvasMock.nativeElement.height / 2);
    expect(contextMock.lineTo).toHaveBeenCalledOnceWith(
      canvasMock.nativeElement.width / 2 + (Math.min(canvasMock.nativeElement.width / 2, canvasMock.nativeElement.height / 2) - 10) * Math.cos((240 * Math.PI) / 180),
      canvasMock.nativeElement.height / 2 + (Math.min(canvasMock.nativeElement.width / 2, canvasMock.nativeElement.height / 2) - 10) * Math.sin((240 * Math.PI) / 180)
    );
    expect(contextMock.stroke).toHaveBeenCalledTimes(2);
  });
});